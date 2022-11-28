import React, { useEffect, useRef } from "react";

const WebSocketPage = () => {
  const wshost = "wss://tr.freshdi.com/wss/wss_order_web";
  const ws = useRef();

  // useEffect(() => {
  //   ws.onmessage = function (event) {
  //     try {
  //       console.log(event.data)
  //       const json = JSON.parse(event.data);
  //       if ((json.event = "data")) {
  //         console.log(json.data);
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   //clean up function
  //   return () => ws.close();
  // }, []);


  useEffect(() => {
    ws.current = new WebSocket(wshost);
    ws.current.onmessage = function (event) {
      console.log(event?.data);
      if (event?.data) {
        try {
          console.log('first')
        } catch (error) {
          console.log(error);
        }
      }
    };
    return () => {
      if (ws.current.readyState === 1) {
        ws.current.close();
      }
    };
  }, []);
  
  const handleClickSend = () => {
    let data = {order: '123', msg: 'hello'};
    ws.current.send(JSON.stringify(data));
    // ws.onopen = (event) => {
    // };

  };

  return (
    <div>
      WebSocket
      <button onClick={handleClickSend}>Send</button>
    </div>
  );
};

export default WebSocketPage;
