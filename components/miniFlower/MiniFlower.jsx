import style from './miniFlower.module.css';



const MiniFlower = ({color, hasNote}) => {
    return (
        <div className="flex flex-col items-center leading-none">
            <div className={style.layer} style={{color: color, animationDelay: '0.8s', padding: '0', fontSize: '24px'}}>❀</div>
            <div className={`${style.layer} text-green-500`} style={{animationDelay: '.3s', padding: '0', fontSize: '12px'}}>🙕|🙓</div>
            {
                hasNote && <div className={`${style.layer} text-white`} style={{padding: '0', fontSize: '16px'}}>-✉-</div>
            }
        </div>
    )
}

export default MiniFlower;