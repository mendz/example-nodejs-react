const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

exports.token = async (req, res) => {
  try {
    const token = `~~THIS IS A TOKEN ::: ${randomNumber(0, 8000)}~~`;
    console.log(`\ncreate token:\n\t${token}\n`);
    res.send(token);
  } catch (error) {
    console.log(`ERROR: \n${error.stack}`);
  }
};
