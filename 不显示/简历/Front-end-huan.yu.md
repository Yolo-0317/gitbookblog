>* Name: Huan Yu  
>* Datayes Inc,  July 2017 - now（more than seven years）
>* Education: master degree
>* mobile: 17701767622
>* mail: jl381169437@gmail.com

### Work Experience

### Jinde Fund Inc.
* Full Stack Engineer
* August 2022 - Now

##### Responsibilities

* Led full-stack development projects, independently managing the entire process from requirement analysis and system design to coding, testing, and deployment.
* Developed the company's internal management system, covering key modules such as meeting management, expense reimbursement, and IT service requests.
* Successfully implemented user registration, account opening, and fund transaction features for the company’s WeChat H5 service, while optimizing the project's code structure.
* Developed backend service APIs for the internal management system using Python, ensuring efficient and accurate data processing.
* Collaborated with brokerage to integrate APIs and streamline data exchange.
* Implemented web scraping techniques to regularly update critical data from brokerage websites, maintaining database accuracy and completeness.
* Actively participated in code reviews and technical knowledge sharing sessions to enhance team development quality and collaboration efficiency.

### Datayes Inc.
* Front-End Engineer
* July 2017 - August 2022

##### Responsibilities

* Develop with React, join in the entire process of the project, deployed project in customer environment, know the basic operation of linux and nginx
* Refined long-term projects that are not compatible with new development mode
* Written document for pervious project for easy maintenance; Perfected document management with document template
* Skilled in CI tools, do some devOps work
* Do some management work includes make development plans and coordinate development resources

### Project Experience

### Jinde Fund Inc.

#### Web Full Stack Development

* Responsibilities:

1. Optimized existing Vue projects and developed new modules
2. Managed the entire development lifecycle, including prototype design, product documentation, database schema design, frontend and backend development, writing test cases, and performing testing.
3. Developed frontend pages for internal management modules such as work order management, incident reports, duty logs, and FAQs using Vue 2 + ElementUI, while building backend services with Python.
4. Developed frontend pages for the company's WeChat service account using Vue 2 + Vant, implementing features such as product introduction, account opening and redemption, and portfolio display.
5. Built the backend review interface for account opening and redemption using Vue 3 + ElementUI, integrating it with the company's internal client system.

* Key Achievements:

1. Independently completed full-stack development tasks for specific modules.
2. Enhanced the internal management system with a refined permission management system, implementing controls for page access, data access, and editing operations, while adding backend permission verification.
3. Separated frontend and backend deployment, enabling independent frontend deployment via GitLab CI/CD.
4. Modified the existing user authentication after deploying frontend alone. Implemented a simulated login request on page load, where the backend verifies Windows domain user permissions and returns an encrypted token for frontend storage. All subsequent API requests carry the token, which expires after two hours.
5. Implemented mobile video slicing upload and mobile electronic signature functionality.
6. Integrated OnlyOffice into the internal system to enable Office file preview.

#### Python Data Processing

* Responsibilities

1. Processed web scraping data, API data, and other data sources using pandas, ensuring efficient data ingestion into the database.
2. Designed database schemas based on business data requirements.
3. Managed the ingestion of securities pool data from brokerage firm APIs and files.
4. Scraped financial data, including securities margin trading collateral and target stocks, futures margin data, Hong Kong short-selling lists, overseas holiday information, and financing securities data, and stored them in the database.
5. Parsed and ingested brokerage transaction data files into the database.
6. Implemented WeCom (Enterprise WeChat) plugin for monitoring alerts, reading unsent messages from the database every minute, and dispatching them via the WeCom API. Logged the number of messages each employee received per hour. Utilized gevent for concurrent requests and recorded failed messages for automatic retry in the next cycle.

* Key Achievements:

1. Provided a stable and reliable futures trading margin dataset.
2. Delivered consistent and accurate data support for the margin financing and securities lending business.
3. Facilitated efficient and accessible data support for the clearing team.

### Datayes Inc.

#### PC Web Page

##### 1. Standard Module Development  (Mar 2020 - August 2022)

1.1 Temasek Project

* Project Description:
    The first project of the company's internationalization strategy, and high-profitability projects, Mainly to migrate and customize some modules in the existing standard products and Internationalize the project  
* Key Achievements:
    1. Responsible for the migration and customization of all front-end modules; Ensure project development progress while familiar with standard product business
    2. The project development result can be successfully reused back to the standard product module; Guarantee the maximum benefit of the project
    3. In the process of internationalizing of the project, summarize the experience and reuse the internationalization plan back to the standard product

1.2 Approval Process of internal research management module

* Project Description:
Based on the standard's existing internal research modules,add approval process management

* Key Achievements:
  1. Responsible for all front-end development content
  2. In the case of ensuring that the existing logic in the backend does not change, by adding a data transformation layer, realize the redesign of front-end page interaction

1.3 Mix Cloud - Authority Management

* Project Description:
  Belong to the company's mix cloud strategy, a private cloud module, including user management, user's role management and role's authority management
* Key Achievements:
  1. Responsible for front-end development management, coordinate and allocate development resources
  2. Developed core reuse components - Permission configuration form. Through the nesting of Antd's Form and Table and the check of the node triggers the tree structure operation through the onChange provided by the Form component. Complete the linkage between the parent and child, support non-fixed multi-level linkage.
  3. For the requirements of multi-user landing deployment, change the CI deployment configuration mode from key-value mode to json file, to reduce the complexity of configuration update;
  4. Manage page access rights through an independent context, without invading page logic
  5. Quickly complete the delivery of more than a dozen projects by setting multiple configuration items

1.4 Mix Cloud - Workflow And Approval Management

* Project Description:
  Belong to the company's mix cloud strategy, a private cloud module, including workflow management, approval management
* Performance:

  1. Responsible for front-end development management, coordinate and allocate development resources
  2. Complete multiple reusable business components and manage state through context
  3. Quickly complete the delivery of more than a dozen projects by setting multiple configuration items

##### 2. Middle Platform for The Investment Advisor

* Project Description:
  1. The target users of this platform are the investment advisors of securities companies,
  2. The main modules of this platform include Tag management of stocks and funds, customer and customer group portraits,Product portrait,Customer financial planning and News information configuration

* Performance:
  1. Build system framework independently, use React and Redux, Complete webpack configuration,
  2. News editor based on CKEditor, developed using the rich text editor component, Custom image upload plugin
  3. Develop a new version of the middle platform based on the unified framework within the group, drive framework refinement during development, he new version adds optimizations such as webpack code segmentation
  4. Responsible for completing customer test environment and production environment deployment tasks

#### NodeJS Experience

* Project Description
  Implement export pdf document service by node and puppeteer

* Key Achievements
  1. Build a private browserless service, Provides a remote chrome service for puppeteer, Services are deployed based on Docker
  2. The export service is built based on EggJS, including log monitoring, deployment configuration in different environments, and extraction of public services

#### Mobile Web Page (before 2020)

##### Robo-Advisor

* Project Description
  Including multiple H5 projects such as Diagnosis of Individual Stock, Diagnosis of Position, Bills Page, communication with customer's existing app to get some info
* Key Achievements
  1. The page communicates with the APP, manipulate historical records by calling the method defined in the app's webview and interact with the native app through postMessage
  2. Build WeChat API authentication service to provide testing service, sort out the WeChat docking plan,develop WeChat sharing and docking module to improve reusability

#### Optimization

  1. For the company's needs for CRM statistical work, in the process of collecting CRM info, sorted out the pain points of the work, proactively completed internal CRM statistics widgets, reduced the daily CRM statistics work from 20-30 minutes/person to about 5 minutes/person, saved time and improve statistical accuracy
  2. Improved configuration of consul system, replace the original key-value mode with json files, modified  the existing Dockerfile and shell scripts, improved the efficiency of modifying the configuration.
  3. Add bots to corporate WeChat groups, to remind members to fill out the daily report
  4. Solved the configuration difficulties of landing deployment
   4.1. Question
      The front-end framework uniformly defines the project configuration in a variable of window, different environments use different values. Every time when it is deployed, need to change hard code
    4.2. Resolve
      When webpack build a package, generated multiple index.html files with different tag by configuring   multiple HtmlWebpackPlugins, each file uses the configuration items of its corresponding environment.
      When deploying in different environments, configure different entries through nginx. It saved the time to modify the index file every time the package was released, and improved the efficiency of package  deployment.

#### Education Experience

* Shandong Jianzhu University
  * 2009-2013
  * Vehicle Engineering
  * Bachelor
* University of Shanghai for Science and Technology
  * 2014-2017  
  * Mechanical Engineering
  * Master
