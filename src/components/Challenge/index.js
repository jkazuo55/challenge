import "bootstrap/dist/css/bootstrap.min.css";
import {Custom} from './Custom/Custom.js';
import Map from './Map/Map.js';
import {Report} from './Report/Report';
import Other from '../other/Map';

const custom={
  "width_map":500,
  "height_map":500,
}

const App= () => {
  return (
      <div className="container">
        <div className="row">
            <div className="col-md">
              <Custom></Custom>
            </div>
            <div className="col-md">
              <Map params={custom}></Map>
            </div>
            <div className="col-md">
              <Report></Report>
            </div>
        </div>
        <div className="row">
          <div className="col-md">
              <Other/>
          </div>
        </div>
    </div>
  );
}

export default App;