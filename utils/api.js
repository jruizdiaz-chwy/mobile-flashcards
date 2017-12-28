import { AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo';

export const DECK_STORAGE_KEY = 'mobileflashcards:decks';
export const QUESTION_STORAGE_KEY = 'mobileflashcards:questions';
export const NOTIFICATION_KEY = 'mobileflashcards:notification';

/**
 * @description Retrieves the deck object stored under the DECK_STORAGE_KEY.
 * @return {Promise}
 */
export const fetchDecks = () => {
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then(JSON.parse);
}

/**
 * @description Adds a new deck property to the deck object stored under the DECK_STORAGE_KEY.
 * @return {Promise}
 */
export const saveDeck = (deck) => {
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [deck.title]: deck
  }))
}

/**
 * @description Retrieves the question object stored under the QUESTION_STORAGE_KEY.
 * @return {Promise}
 */
export const fetchQuestions = () => {
  debugger;
  return AsyncStorage.getItem(QUESTION_STORAGE_KEY).then(JSON.parse);
}

/**
 * @description Adds a new question property to the question object stored under the QUESTION_STORAGE_KEY.
 * @return {Promise}
 */
export const saveQuestion = (question) => {
  return AsyncStorage.mergeItem(QUESTION_STORAGE_KEY, JSON.stringify({
    [question.id]: question
  }))
}

/**
 * @description Removes an existing notification from the phone.
 * @return {Promise}
 */
export const clearLocalNotification = () => {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync());
}

/**
 * @description Creates a notification object used to schedule a daily reminder notification.
 * @return {Object} a Notification object.
 */
const createNotification = () => {
  return {
    title: 'Study time!',
    body: "Hey! 👋 don't forget your daily study session!",
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true
    }
  }
}

/**
 * @description Schedules a daily notification reminder for the user to study.
 * @return {Void}
 */
export const setLocalNotification = () => {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then(data => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync();

              let tomorrow = new Date();
              tomorrow.setDate(tomorrow.getDate() + 1);
              tomorrow.setHours(16);
              tomorrow.setMinutes(0);

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day'
                }
              );

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
            }
          })
      }
    })
}