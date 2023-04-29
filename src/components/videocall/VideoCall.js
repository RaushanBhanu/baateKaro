import React, { useState, useEffect, useRef } from 'react';
import SimplePeer from 'simple-peer';

const VideoCall = () => {
  const [localStream, setLocalStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);
  const [peer, setPeer] = useState(null);
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setLocalStream(stream);
        localVideoRef.current.srcObject = stream;
      })
      .catch((error) => console.error('Error accessing media devices:', error));
  }, []);

  const startCall = () => {
    const newPeer = new SimplePeer({
      initiator: true,
      trickle: false,
    });

    newPeer.on('signal', (data) => {
      // Send signal data to remote peer
    });

    newPeer.on('connect', () => {
      console.log('Peer connection established');
    });

    newPeer.on('stream', (stream) => {
      setRemoteStream(stream);
      remoteVideoRef.current.srcObject = stream;
    });

    newPeer.on('error', (error) => console.error('Peer error:', error));

    setPeer(newPeer);
  };

  const handleSignalData = (data) => {
    if (peer) {
      peer.signal(data);
    }
  };

  const endCall = () => {
    if (peer) {
      peer.end();
      setPeer(null);
    }
    if (localStream) {
      const tracks = localStream.getTracks();
      tracks.forEach((track) => track.stop());
      setLocalStream(null);
    }
    if (remoteStream) {
      const tracks = remoteStream.getTracks();
      tracks.forEach((track) => track.stop());
      setRemoteStream(null);
    }
  };

  return (
    <div>
      <video ref={localVideoRef} autoPlay muted />
      <video ref={remoteVideoRef} autoPlay />
      <button onClick={startCall}>Start Call</button>
      <button onClick={endCall}>End Call</button>
    </div>
  );
};

export default VideoCall;
