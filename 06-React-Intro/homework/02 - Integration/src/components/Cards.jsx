import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   return (
   <div>
      {
         characters.map(m => (
            <Card
            name = {m.name}
            species = {m.species}
            gender = {m.gender}
            image = {m.image}
            onClose = {()=>{alert(m.onClose)}}
            />
         ))
      }
   </div>
   );
}
