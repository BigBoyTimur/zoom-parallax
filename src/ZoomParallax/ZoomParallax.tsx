import styles from "./styles.module.sass"

import image1 from '../assets/images/1.jpeg'
import image2 from '../assets/images/2.jpeg'
import image3 from '../assets/images/3.jpg'
import image4 from '../assets/images/4.jpg'
import image5 from '../assets/images/5.jpg'
import image6 from '../assets/images/6.jpg'
import image7 from '../assets/images/7.jpeg'

import {motion, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";

function ZoomParallax() {

  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4])
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5])
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6])
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8])
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9])

  const pictures = [
    {
    src: image1,
    scale: scale4
    },
    {
      src: image2,
      scale: scale5
    },
    {
      src: image3,
      scale: scale6
    },
    {
      src: image4,
      scale: scale5
    },
    {
      src: image5,
      scale: scale6
    },
    {
      src: image6,
      scale: scale8
    },
    {
      src: image7,
      scale: scale9
    }]
  return (
    <div ref={container} className={styles.container}>
      <div className={styles.sticky}>
        {pictures.map(({src, scale}, index) => {
          return <motion.div key={index} className={styles.el} style={{scale}}>
            <div className={styles.imageContainer}>
              <img src={src} alt="" />
            </div>
          </motion.div>
        })}
      </div>
    </div>
  );
}

export default ZoomParallax;