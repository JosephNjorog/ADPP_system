import React, { useState, useEffect } from 'react';
import { getNotifications, markAsRead } from '../../services/notificationService';

const NotificationCenter = () => {
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      const data = await getNotifications();
      setNotifications(data);
      setUnreadCount(data.filter(n => !n.read).length);
    } catch (error) {
      console.error('Failed to fetch notifications:', error);
    }
  };

  const handleMarkAsRead = async (id) => {
    try {
      await markAsRead(id);
      setNotifications(notifications.map(n => 
        n.id === id ? { ...n, read: true } : n
      ));
      setUnreadCount(prev => prev - 1);
    } catch (error) {
      console.error('Failed to mark notification as read:', error);
    }
  };

  return (
    <div className="notification-center">
      <h2>Notifications {unreadCount > 0 && <span className="badge">{unreadCount}</span>}</h2>
      <ul className="notification-list">
        {notifications.map(notification => (
          <li key={notification.id} className={`notification-item ${notification.read ? 'read' : 'unread'}`}>
            <p>{notification.message}</p>
            <small>{new Date(notification.timestamp).toLocaleString()}</small>
            {!notification.read && (
              <button onClick={() => handleMarkAsRead(notification.id)} className="btn btn-small">
                Mark as Read
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationCenter;