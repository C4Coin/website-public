import axios from 'axios'
import qs from 'qs'

const tokenEndpoint = 'https://createsend.com//t/getsecuresubscribelink'

function requestToken(id, email) {
  const config = {
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    }
  }
  const data = qs.stringify({
    data: id,
    email
  })

  return axios.post(tokenEndpoint, data, config)
}

function sendData(token, fields) {
  const config = {
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    }
  }
  const data = sq.stringify(fields)

  return axios.post(token, data, config)
}

function subscribe(id, email, fields) {
  return requestToken(id, email).then(response => {
    console.log(response)
    return sendData(response, fields)
  })
}

// function submit(id, email) {
//     // Build request data for tokenRequest.
//     request_data = "email=" + encodeURIComponent(email) + "&data=" + id;
//
//     // Prepare tokenRequest.
//     let tokenRequest = new XMLHttpRequest();
//     tokenRequest.open('POST', 'https://createsend.com//t/getsecuresubscribelink', true);
//     tokenRequest.setRequestHeader(
//       "Content-type",
//       "application/x-www-form-urlencoded"
//     );
//     tokenRequest.send(request_data);
//
//     // Ready state.
//     tokenRequest.onreadystatechange = function() {
//       if (this.readyState === 4) {
//         if (this.status === 200) {
//           // Having token and new submit url we can create new request to subscribe a user.
//           subscribeRequest = new XMLHttpRequest();
//           subscribeRequest.open('POST', this.responseText, true);
//         subscribeRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//         subscribeRequest.send(form.serialize());
//         // On ready state call response function.
//         subscribeRequest.onreadystatechange = function() {
//           c.response(subscribeRequest);
//         }
//       } else {
//         c.response(tokenRequest);
//       }
//     }
//   }
// }

export default {
  requestToken,
  sendData,
  subscribe
}
