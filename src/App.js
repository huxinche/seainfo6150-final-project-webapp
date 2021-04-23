import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import Home from "./Home/Home.jsx";
import Error from "./Error/Error.jsx";
import NavBar from "./Components/Common/Navbar/Navbar";
import { isEmpty } from "lodash";
import Form from "./Form/Form.jsx";
import logo from "./images/UniversityLogo.png";
import FindYourProgram from "./FindYourProgram/FindYourProgram.jsx";
import Program from "./Program/Program.jsx";
import WhyBU from './WhyBU/WhyBU.jsx';
import ContactUS from "./ContactUS/ContactUS.jsx";
import Conformation from "./Conformation/Conformation.jsx";

// here is some external content. look at the /baz route below
// to see how this content is passed down to the components via props


function App() {
  // let history = useHistory();
  const [form, setform] = useState({
    name: '',
    dob: '',
    phone: '',
    email: '',
    password: '',
    religion: null,
    edu: null,
    gender: null,
  });
  const [fetchedData, setFetchedData] = useState({});

  // const handleKeyPress = useCallback((e) => {
  //   switch (e.keyCode) {
  //     // back
  //     case 8:
  //       history.push('/')
  //       break;
  //     // f key
  //     case 70:
  //       history.push('/findmyprogram')
  //       break;
  //     // w key
  //     case 89:
  //       history.push('/whybu')
  //       break;
  //     // c key
  //     case 67:
  //       history.push('/contactus')
  //       break;
  //     // r key
  //     case 82:
  //       history.push('/register')
  //       break;
  //     default:
  //       break;
  //   }
  // }, [history])

  useEffect(() => {
    const fetchData = async () => {
      // performs a GET request
      const response = await fetch("https://demo2293143.mockable.io/courses");
      const responseJson = await response.json();
      setFetchedData(responseJson);
    };
    // document.addEventListener("keydown", handleKeyPress);
    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);


  return (
    <div >
      <header>
        <NavBar logo={logo} />
      </header>
      <main >
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>

          {/* <Route path="/program/:name" exact component={Foo} /> */}
          {/* passing parameters via a route path */}
          <Route
            path="/program/:name"
            exact
            render={({ match }) => (
              <Program
                program={fetchedData[match.params.name]}
              />
            )}
          />
          <Route
            path="/register"
            exact
            render={() => <Form form={form} setForm={setform} />}
          />
          <Route
            path="/whybu"
            exact
            render={() => <WhyBU />}
          />
          <Route
            path="/contactus"
            exact
            render={() => <ContactUS />}
          />
          <Route
            path="/findmyprogram"
            exact
            render={() => <FindYourProgram items={fetchedData} />}
          />
          <Route
            path="/confirm"
            exact
            render={() => <Conformation form={form} />}
          />
          <Route path="/"
            exact
            component={Home} />
          <Route component={Error} />
        </Switch>
      </main>
      <footer>
        <div >

          <div >
            <span><strong>Boston University</strong> Graduate Education</span>
            <br />
            <p >
              One Silber Way, 8th Floor, Boston, MA 02215
              </p>
            <p>
              <a href="mailto:graduateProgram@bu.edu" >graduateProgram@bu.edu</a> | 617-353-2230
            </p>
          </div></div>

      </footer>
    </div>

  );
}

export default App;
