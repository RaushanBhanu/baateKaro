import React, { useState, useRef, useEffect } from 'react';
import SimplePeer from 'simple-peer';

const Video = () => {
  const [localStream, setLocalStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);
  const [peer, setPeer] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    // Get access to user's camera and microphone
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setLocalStream(stream);
        videoRef.current.srcObject = stream;
      })
      .catch((error) => console.error('Error accessing media devices:', error));
  }, []);

  const startCall = () => {
    // Create new Simple Peer instance
    const newPeer = new SimplePeer({
      initiator: true,
      trickle: false,
    });

    // Set up event listeners
    newPeer.on('signal', (data) => {
      // Send signal data to remote peer
    });
    newPeer.on('stream', (stream) => {
      setRemoteStream(stream);
    });
    newPeer.on('error', (error) => console.error('Peer error:', error));

    setPeer(newPeer);
  };

  const endCall = () => {
    if (peer) {
      peer.destroy();
      setPeer(null);
      setRemoteStream(null);
    }
  };

  return (
    <div>
      <video ref={videoRef} autoPlay muted />
      {remoteStream && <video srcObject={remoteStream} autoPlay />}
      <button onClick={startCall}>Start Call</button>
      <button onClick={endCall}>End Call</button>
    </div>
  );
};

export default VideoCall;
