
function App() {
  
  return (
    <div className="App">
        <a-scene  arjs='sourceType: webcam; debugUIEnabled: false'>
                    <a-anchor hit-testing-enabled="true">
                    <a-entity
          position="0 0 -1.5"
          scale="0.05 0.05 0.05"
          gltf-model="./models/Numero1.glbt"
        ></a-entity>
                    </a-anchor>
                    <a-camera-static preset="hiro" />
                </a-scene>
    </div>
  );
}

export default App;
