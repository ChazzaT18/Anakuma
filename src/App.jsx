import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <img className='anakuma' src="https://scontent-man2-1.xx.fbcdn.net/v/t39.30808-6/396008820_732405982043609_7333806889233666283_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=2h81BpMwjNwQ7kNvgGoaK33&_nc_ht=scontent-man2-1.xx&cb_e2o_trans=t&oh=00_AYBZlmUB5ryqrf7DljDq1IaqMIv6QhPQCFl-pYHq2lQwbQ&oe=6667D16C" />
        <h1>Website coming soon.</h1>
      </div>
    </>
  );
}

export default App;
