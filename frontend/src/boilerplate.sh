#!/bin/bash

# Map of views and their associated components
declare -A viewComponents
viewComponents["Homepage"]="Navbar FeaturedProperties OurServices Testimonials Footer"
viewComponents["Properties"]="Navbar PropertyList PropertyCard Footer"
viewComponents["Services"]="Navbar ServicesList Footer"
viewComponents["AboutUs"]="Navbar AboutSection TeamMembers Footer"
viewComponents["Testimonials"]="Navbar TestimonialList Footer"
viewComponents["Blog"]="Navbar BlogPostList Footer"
viewComponents["ContactUs"]="Navbar ContactForm Footer"

# Create directories for components and views
mkdir -p src/components
mkdir -p src/views

# Create files for components
for components in ${viewComponents[@]}; do
  for component in $components; do
    mkdir -p src/components/${component}
    if [ ! -f src/components/${component}/index.tsx ]; then
      cat > src/components/${component}/index.tsx << EOF
import React from 'react';

const ${component}: React.FC = () => {
  return (
    <div>
      {/* Your ${component} component code here */}
    </div>
  );
};

export default ${component};
EOF
    fi
  done
done

# Create files for views
for view in ${!viewComponents[@]}; do
  components=${viewComponents[${view}]}
  mkdir -p src/views/${view}
  if [ ! -f src/views/${view}/index.tsx ]; then
    cat > src/views/${view}/index.tsx << EOF
import React from 'react';
$(for component in $components; do echo "import ${component} from '../components/${component}';"; done)

const ${view}: React.FC = () => {
  return (
    <div>
      {/* Your ${view} view code here */}
$(for component in $components; do echo "      <${component} />"; done)
    </div>
  );
};

export default ${view};
EOF
  fi
done

# Create App.tsx with react-router-dom setup
if [ ! -f src/App.tsx ]; then
  cat > src/App.tsx << EOF
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
$(for components in ${viewComponents[@]}; do for component in $components; do echo "import ${component} from './components/${component}';"; done; done)
$(for view in ${!viewComponents[@]}; do echo "import ${view} from './views/${view}';"; done)

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
$(for view in ${!viewComponents[@]}; do lowerView=$(echo ${view} | tr '[:upper:]' '[:lower:]'); echo "        <Route path=\"/${lowerView}\" exact component={${view}} />"; done)
      </Switch>
    </Router>
  );
}

export default App;
EOF
fi

echo "File structure
