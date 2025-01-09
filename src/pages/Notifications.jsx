import { useState } from 'react';

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'Payment Successful',
      message: 'Your payment of $100 was processed successfully.',
      timestamp: '2025-01-01 10:00 AM',
      read: false,
    },
    {
      id: 2,
      title: 'New Feature Released',
      message: 'Check out our new onramp/offramp feature now available!',
      timestamp: '2025-01-02 12:30 PM',
      read: true,
    },
    {
      id: 3,
      title: 'Profile Update',
      message: 'Your profile information was updated successfully.',
      timestamp: '2025-01-03 2:15 PM',
      read: false,
    },
  ]);

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const deleteNotification = (id) => {
    setNotifications((prev) => prev.filter((notification) => notification.id !== id));
  };

  return (
    <div className="min-h-screen bg-neutral-light p-6">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold text-center mb-4">Notifications</h2>
        {notifications.length > 0 ? (
          <ul className="space-y-4">
            {notifications.map((notification) => (
              <li
                key={notification.id}
                className={`p-4 rounded-md border ${
                  notification.read ? 'bg-gray-100 border-gray-300' : 'bg-primary-light border-primary'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold">{notification.title}</h3>
                    <p className="text-sm text-neutral-dark">{notification.message}</p>
                    <span className="text-xs text-neutral-gray">{notification.timestamp}</span>
                  </div>
                  <div className="space-x-2">
                    {!notification.read && (
                      <button
                        onClick={() => markAsRead(notification.id)}
                        className="text-sm text-white bg-primary p-1 px-2 rounded"
                      >
                        Mark as Read
                      </button>
                    )}
                    <button
                      onClick={() => deleteNotification(notification.id)}
                      className="text-sm text-red-600 border border-red-600 p-1 px-2 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">No notifications available.</p>
        )}
      </div>
    </div>
  );
};

export default Notifications;
