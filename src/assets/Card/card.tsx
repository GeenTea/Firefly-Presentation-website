type CardProps ={
    img?: string
};

const Card = ({img}: CardProps) => {
    return(
        <div className="w-[25rem] h-[40rem] pointer-events-none select-none flex items-center justify-center overflow-hidden">
            {img && <img src={img} alt='fireflycard' className="w-full h-full object-cover rounded-xl" />}
        </div>
    );
};

export default Card;