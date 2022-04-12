import '../Card/style.modules.css';

export function Card(props) {
    return (
      <div className='div'>
        <img src={props.img} className="imagem" alt="cavalo marrom" />
        <h1>{props.children}</h1>
        <p className={props.className}>{props.children}</p>
      </div>
    );
  }
