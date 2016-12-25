import Application from './application';
import 'whatwg-fetch';

window.fetch('https://intensive-ecmascript-server-nnpnvhhedl.now.sh/pixel-hunter/questions').
    then((response) => Application.checkStatus(response)).
    then((response) => response.json()).
    then((data) => {
      Application.data = data;
    }).
    then(Application.showIntro).
    catch(Application.showError);
