export const DISEASE_TYPES = [
    { id: 'influenza', name: 'Influenza' },
    { id: 'covid19', name: 'COVID-19' },
    { id: 'malaria', name: 'Malaria' },
    { id: 'dengue', name: 'Dengue Fever' },
    { id: 'ebola', name: 'Ebola' },
  ];
  
  export const USER_ROLES = {
    USER: 'user',
    MODERATOR: 'moderator',
    ADMIN: 'admin',
  };
  
  export const ALERT_SEVERITY = {
    LOW: 1,
    MEDIUM: 2,
    HIGH: 3,
  };
  
  export const API_ENDPOINTS = {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    PREDICTIONS: '/predictions',
    DATA: '/data',
    ALERTS: '/alerts',
    ANALYTICS: '/analytics',
    USERS: '/users',
  };
  
  export const MAP_INITIAL_VIEW = {
    center: [0, 20],
    zoom: 2,
  };