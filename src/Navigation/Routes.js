import React from "react";

// Must include Router, though not used, the code will not render otherwise
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Pages/Home";
import WriteReview from "../Pages/WriteReview";
import Doctors from "../Pages/Doctors";

const Routes = () => {
return (
    <div>
    <Switch>
        <Route path="/home" component={Home} />
        <Route path="/write-review" component={WriteReview} />
        <Route path="/doctors" component={Doctors} />
        <Route exact path="/" component={Home} />
    </Switch>
    </div>
);
};

export default Routes;