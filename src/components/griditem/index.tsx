import { type } from "@testing-library/user-event/dist/type";
import { Level } from "../../helpers/imc";
import styles from"./griditem.module.css"
import UpImage from"../../images/up.png";
import DownImage from "../../images/down.png";
import { title } from "process";


type Props = {
    item: Level;
};

export const GridItem=({ item }:Props)=>{
    return(
        <div className={styles.main}style={{backgroundColor:item.color}}>
            <div className={styles.gridIcon}>
            {item.icon ==='up'&& <img src={UpImage} alt="" width="30"/>}
            {item.icon ==='down'&& <img src={DownImage} alt="" width="30"/>}
            </div>
            <div className={styles.gridTitle}>{item.title}</div>
            <div className={styles.gridInfo}>
                {item.yourImc &&
                <div className={styles.yourImc}>Seu imc é {item.yourImc} Kg/mq</div>}
             <>
               IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>

             </>
            </div>
        </div>
    )
};