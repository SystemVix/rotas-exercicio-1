import './styles.css';

type Props =
{
   titulo: string;
}

export default function Cartao({titulo}: Props)
{
   return (
      <div className="vs-caixa">
         <h2>{titulo}</h2>         
      </div>      
   );
}