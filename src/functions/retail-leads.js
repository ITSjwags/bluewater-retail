const request = require("request-promise");

// netlify lambda function for submitting form to pardot

const createLead = async data => {
  try {
    await request("http://go.pardot.com/l/665683/2019-01-30/249q", {
      method: "POST",
      form: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone
      }
    });
  } catch (err) {
    console.error("api error: ", err.message);
    return Promise.reject(err);
  }

  return Promise.resolve();
};

exports.handler = async function (event, context, callback) {
  console.log('body: ', event.body);

  // bail if body is missing
  if (!event.body) {
    return callback(null, {
      statusCode: 400,
      body: JSON.stringify({
        error: "missing body"
      })
    });
  }

  // post to pardot
  try {
    console.info('event received', event.body);
    const body = JSON.parse(event.body);
    const { firstName, lastName, email, phone } = body;

    await createLead({
      firstName,
      lastName,
      email,
      phone
    });

    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        emailAdded: true
      })
    })
  } catch (err) {
    console.error('lead submission error:', err.message);
    return callback(null, {
      statusCode: 500,
      body: JSON.stringify({
        error: "An unknown error occurred"
      })
    });
  }
}

