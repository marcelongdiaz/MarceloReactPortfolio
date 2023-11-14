import './button.styles.scss';

const Button = ({ label, onClick, isRounded, sz = 'sm', theme='light', roundedSize=15, sx, hover=true }) => {

    const customStyle = {
        borderRadius: isRounded? `${roundedSize}px`: 'none',
        padding: sz === 'sm' ?'5px 10px': sz === 'md'?'10px 25px': sz === 'lg'?'15px 40px': sz === 'xs'?"3px 5px":"0px",
        fontSize: sz === 'sm'?'10px': sz === 'md'?'13px': sz === 'lg'?'18px': sz === 'xs'?'5px':'0px',
        color: theme === 'light'? '#f7f7f7': '#393e46',
        backgroundColor: theme === 'light'? '#393e46': '#f7f7f7',
        textAlign: 'center',
        border: 'none',
        outline: 'none',
    }
    
    return (
        <button className={ `util-btn  ${theme === 'light'? 'util-btn-light':'util-btn-dark'} ${hover? '':'no-hover'}` } style={ { ...customStyle, ...sx }} onClick={ onClick }>
            { label }
        </button>
    )
}

export default Button;