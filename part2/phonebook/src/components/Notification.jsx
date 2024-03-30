
export const Notification = ({ errMessage, noteMessage }) => {
  const notificationStyle_1 = {
    color: 'green',
    background: 'lightgrey',
    fontSize: 20,
    borderWidth: 5,
    borderStyle: 'solid',
    borderColor: 'green',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  };

  const notificationStyle_2 = {
    color: 'red',
    background: 'lightgrey',
    fontSize: 20,
    borderWidth: 5,
    borderStyle: 'solid',
    borderColor: 'red',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  };

  if ((errMessage && noteMessage) === null) {
    return null;
  }
  else if (errMessage) {
    return (
      <div style={notificationStyle_2}>
        {errMessage}
      </div>
    );
  }
  else if (noteMessage) {
    return (
      <div style={notificationStyle_1}>
        {noteMessage}
      </div>
    );
  }
};
