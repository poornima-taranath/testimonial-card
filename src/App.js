import profile from "./profile-thumbnail.png";
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <div className="card">
          <div className="heading">
            <img
              src={profile}
              alt="profile"
            />
            <div className="name">
              Sarah Dole
              <div className="name-alt">@sarahdole</div>
            </div>
          </div>
          <p>
            I've been searching for high-quaity abstract iamges for my design
            projects and I'm thrilled to have found this platform. The variety
            and depth of creativity are astounding!.
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
