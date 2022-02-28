import "./styles.css";
import {animated, useSpring} from 'react-spring'

export default function App() {
  const styles = useSpring({
    from: { rotateZ: 0},
    to: { rotateZ: 180},
    loop:true
  })
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <animated.div
      style={{
        width: 80,
        height: 80,
        backgroundColor: '#46e891',
        borderRadius: 16,
        ...styles,
      }}
    />
    </div>
  );
}
