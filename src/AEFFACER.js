
class ListFormations extends Component {
    getData = () => {
      return this.props.formation.map((item, index) => {
        return (
            <div key={index} className="test">
              <div>Formateur : {item.nom}</div>
              <ul>
                <li>Formations : {item.formations}</li>
                <li>Contact : {item.contact}</li>
                <li className="status">
                  Status : {item.status}
                </li>
              </ul>
            </div>
        );
      });
    };
    render() {
      return (
        <div className="cont">
          <div className="row">{this.getData()}</div>
        </div>
      );
    }
  }
  
  export { ListFormations };
  