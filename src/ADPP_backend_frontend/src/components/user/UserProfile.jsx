import React, { useState, useEffect } from 'react';
import { getUserProfile, updateUserProfile } from '../../services/userService';
import { useAuth } from '../../hooks/useAuth';

const UserProfile = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState({
    username: '',
    email: '',
    organization: '',
    role: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const data = await getUserProfile(user.id);
      setProfile(data);
    } catch (error) {
      console.error('Failed to fetch user profile:', error);
    }
  };

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUserProfile(user.id, profile);
      setMessage('Profile updated successfully');
      setIsEditing(false);
    } catch (error) {
      setMessage('Failed to update profile. Please try again.');
    }
  };

  return (
    <div className="user-profile card">
      <h2>User Profile</h2>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={profile.username}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>
        <div className="form-group">
          <label htmlFor="organization">Organization</label>
          <input
            type="text"
            id="organization"
            name="organization"
            value={profile.organization}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>
        <div className="form-group">
          <label htmlFor="role">Role</label>
          <input
            type="text"
            id="role"
            name="role"
            value={profile.role}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>
        {isEditing ? (
          <button type="submit" className="btn btn-primary">Save Changes</button>
        ) : (
          <button type="button" onClick={() => setIsEditing(true)} className="btn btn-secondary">Edit Profile</button>
        )}
      </form>
    </div>
  );
};

export default UserProfile;