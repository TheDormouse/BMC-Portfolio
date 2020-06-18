import ReactGA from "react-ga";
 
const GoogleAnalyticsId = "UA-169904775-1";
 
class AnalyticsInternal {
    constructor() {
        ReactGA.initialize(GoogleAnalyticsId);
    }
 
    logPageView(url) {
        ReactGA.pageview(url);
    }
}

export const Analytics = new AnalyticsInternal();