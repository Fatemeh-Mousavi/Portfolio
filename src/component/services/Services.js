import "./Services.css";
import CardServices from "./cardservices/CardServices";
function Servicses() {
  let articels = [
    {
      id: 1,
      icon: "bi bi-briefcase",
      title: "Hard Work",
      info: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Magniadipisci eaque autem fugiat! Quia provident vitae!
             Magnitempora perferendis eum non providen`,
    },
    {
      id: 2,
    icon: "bi bi-bar-chart",
    title: "Design",
    info: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Magniadipisci eaque autem fugiat! Quia provident vitae!
           Magnitempora perferendis eum non providen`
    } , 
    {
      id: 3,
      icon: "bi bi-brightness-high",
      title: "Redact",
      info: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Magniadipisci eaque autem fugiat! Quia provident vitae!
             Magnitempora perferendis eum non providen`
    } , 
    {
      id: 4,
      icon: "bi bi-binoculars",
      title: "Java Script",
      info: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Magniadipisci eaque autem fugiat! Quia provident vitae!
             Magnitempora perferendis eum non providen`
    },
      {
        id: 5,
        icon: "bi bi-card-checklist",
        title: "web Development",
        info: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Magniadipisci eaque autem fugiat! Quia provident vitae!
               Magnitempora perferendis eum non providen`
      }, 
      {
        id: 6,
        icon: "bi bi-calendar4-week",
        title: "BootStrap",
        info: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Magniadipisci eaque autem fugiat! Quia provident vitae!
               Magnitempora perferendis eum non providen`
      }
    
   ];
  return (
 
        <div className="row">
          {
            articels.map(articel => <CardServices key={articel.id} {...articel}/>)
          }
          {/* <CardServices {...articels[0]}></CardServices>
          <CardServices {...articels[1]}></CardServices>
          <CardServices {...articels[2]}></CardServices>
          <CardServices {...articels[3]}></CardServices>
          <CardServices {...articels[4]}></CardServices>
          <CardServices {...articels[5]}></CardServices>         */}
        </div>
  
  );
}
export default Servicses;
