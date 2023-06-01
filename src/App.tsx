import { useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Form from "./components/Form/Form";
import SuccessPage from "./components/SuccessPage/SuccessPage";

function App() {
  const [success, setSuccess] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const io = new ResizeObserver((e) => {
    if (e[0].contentRect.width < 801) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  });

  io.observe(document.body);

  function showSuccessPage() {
    setSuccess(true);
  }

  function hideSuccessPage() {
    setSuccess(false);
  }

  return (
    <main>
      {success && <SuccessPage onClickEvent={hideSuccessPage} />}
      {!success && (
        <Card className="form-card">
          <div className="p-6 form-card__content">
            <h1 className="text-5xl font-bold">Stay updated!</h1>
            <p className="my-5">
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <ul className="list">
              <li>
                <img src="/images/icon-list.svg" alt="" /> Product discovery and
                building what matters
              </li>
              <li>
                <img src="/images/icon-list.svg" alt="" />
                Measuring to ensure updates are a success
              </li>
              <li>
                <img src="/images/icon-list.svg" alt="" />
                And much more!
              </li>
            </ul>
            <Form onSubmitEvent={showSuccessPage} />
          </div>

          <div className="images">
            {!isMobile && (
              <img
                className="img-desktop"
                src="/images/illustration-sign-up-desktop.svg"
                alt=""
              />
            )}
            {isMobile && (
              <img
                className="img-mobile"
                src="/images/illustration-sign-up-mobile.svg"
                alt=""
              />
            )}
          </div>
        </Card>
      )}
    </main>
  );
}

export default App;
