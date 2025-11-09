import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type Props = {imageSrc?: string}

const moveupanimetionimg= ({imageSrc}:Props) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
    }, []);

    return(
        <div>
            {visible && imageSrc &&
            <motion.img
                src={imageSrc}
                animate={{y: -100, opacity: 1}}
            />}
            
        </div>
    )
}

export default moveupanimetionimg;