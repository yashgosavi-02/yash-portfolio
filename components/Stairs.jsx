import { animate, motion } from "framer-motion"

// variants

const stairAnimation = {
    initial : {
        top: "0%",
    },
    animate : {
        top : "100%",
    },
    exit : {
        top : ["100%", "0%"],
    }
}

const calculateReverseIndex = (index) => {
    return 6 - index - 1
}
const Stairs = () => {
  return (
    // render 6 motion divs each representing a step
    <>
    {[...Array(6)].map((_, index) => {
        return (
            <motion.div
                key={index}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={stairAnimation}
                transition={{
                    duration: 0.4,
                    delay: calculateReverseIndex(index) * 0.1,
                    ease: "easeInOut"
                }}
                className="h-full w-full bg-white relative"
            />
        )
    })}
    </>
  )
}

export default Stairs