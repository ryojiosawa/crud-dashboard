import * as React from 'react';
import NotificationsContext, {
  type ShowNotificationOptions,
  type ShowNotification,
  type CloseNotification,
} from './NotificationsContext';

// Re-export types from NotificationsContext for convenience
export type { ShowNotificationOptions, ShowNotification, CloseNotification };

interface UseNotifications {
  show: ShowNotification;
  close: CloseNotification;
}

export default function useNotifications(): UseNotifications {
  const notificationsContext = React.useContext(NotificationsContext);
  if (!notificationsContext) {
    throw new Error('Notifications context was used without a provider.');
  }
  return notificationsContext;
}
