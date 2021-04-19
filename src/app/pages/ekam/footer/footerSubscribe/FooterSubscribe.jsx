import React, { useState } from 'react';

const FooterSubscribe = () => {
  const [email, setemail] = useState();

  const inputevent = event => {
    const getvalue = event.target.value;
    setemail(getvalue);

    console.log(getvalue);
  };
  const subscribesubmit = e => {
    e.preventDefault();
    alert(`You will get our Latest Newsletters on "${email}"`);
  };

  return (
    <>
      <div className="row  justify-content-center">
        <div className="col-lg-6">
          <h3>ekam</h3>
          <p>
            Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni
            eligendi fuga maxime saepe commodi placeat.
          </p>
        </div>
      </div>

      <div className="row footer-newsletter justify-content-center">
        <div className="col-lg-6">
          <form onSubmit={subscribesubmit}>
            <input
              type="email"
              name="email"
              value={email}
              onChange={inputevent}
              placeholder="Enter your Email"
            />
            <input type="submit" value="Subscribe" />
          </form>
        </div>
      </div>
    </>
  );
};
export default FooterSubscribe;
