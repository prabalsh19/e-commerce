import "./Loader.css";

export function Loader() {
  return (
    <div className="loader-bg">
      <div className="loader-container">
        <img
          className="loader"
          alt="loader"
          src="https://cdn.dribbble.com/users/563824/screenshots/3633228/media/b620ccb3ae8c14ea5447d159ebb1da58.gif"
        />
      </div>
    </div>
  );
}
