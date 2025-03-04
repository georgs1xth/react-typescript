import{ FC, ReactNode, useState } from "react";

export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary'
}

interface CardProps {
    width?: string;
    height?: string;
    variant: CardVariant;
    children?: ReactNode;
    onClick: (num: number) => void;
}

const Card: FC<CardProps> = 
    ({
        width, 
        height, 
        variant, 
        onClick,
        children
    }) => {

    const [state, setState] = useState(0);
    
    if(state == -1){
        setState(0)
    }

  return (
    <div style={{width, height, 
        display: 'flex',
        justifyContent: 'center',
        flexFlow: 'column',
        gap: '15px',
        padding: '20px',
        borderRadius: '25px',
        border: variant === CardVariant.outlined ? '1px solid black' : 'none',
        background: variant === CardVariant.primary ? 'lightgray' : 'none', 
    }}
        onClick={() => onClick(state)}
    >
        {children}
    </div>
  )
}

export default Card