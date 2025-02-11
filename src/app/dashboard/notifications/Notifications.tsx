'use client';
import { Bell } from "lucide-react";
import { useEffect, useState } from "react";

const Notifications = () => {
  interface Notification {
    id: number;
    message: string;
    date: string;
    read: boolean;
  }

  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch('/api/notifications');
        const data = await response.json();
        setNotifications(data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <div className="p-6 bg-gray-100 md:w-[80vw]">
      <h1 className="text-2xl font-bold mb-6 flex items-center">
        <Bell className="mr-2" /> Notifications
      </h1>
      <div className="bg-white shadow-md rounded-lg">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 border-b ${!notification.read ? 'bg-blue-50' : ''}`}
          >
            <p>{notification.message}</p>
            <p>{notification.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;