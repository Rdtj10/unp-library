import { useSpring,animated } from "react-spring";

const Number =({n, x})=>{
    const {number} = useSpring({
        from: {number:0},
        number: n,
        delay: 200,
        config:{mass: 1, tension: 20, friction: x},
      })
      return(
        <animated.div>
            {number.to((n) => n.toFixed(0))}
        </animated.div>
      )
    }
export default Number;