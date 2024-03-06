import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((values) => {
    const returnedArray = [];

    for (const result of values) {
      if (result.status === 'fulfilled') {
        returnedArray.push({
          status: result.status,
          value: result.value,
        });
      } else {
        returnedArray.push({
          status: result.status,
          value: result.reason.toString(),
        });
      }
    }
    return returnedArray;
  });
}
