export interface SkillItem {
  name: string;
  category:
    | 'Programming'
    | 'AI / Machine Learning'
    | 'Web Development'
    | 'Tools & Workflow'
    | 'Core Computer Science';
  proficiency: 'Core Stack' | 'Applied Build' | 'Active Exploration';
  context: string;
  yearsOrProjects: string;
}

export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  category: 'Embedded & IoT' | 'Applied AI / ML' | 'Full-Stack Web' | 'Data Science';
  timeframe: string;
  featuredSpan: 'wide' | 'standard';
  summary: string;
  problemStatement: string;
  engineeringApproach: string;
  architectureSteps: {
    step: string;
    title: string;
    detail: string;
  }[];
  metrics: {
    label: string;
    value: string;
    context: string;
  }[];
  techStack: string[];
  githubUrl: string;
  liveDemoNote: string;
  simulatorType: 'irrigation' | 'diagnostic' | 'devhub' | 'analytics';
  codeSnippet: {
    filename: string;
    language: string;
    code: string;
  };
}

export interface TimelineEntry {
  id: string;
  period: string;
  role: string;
  organization: string;
  location: string;
  type: 'Internship Spotlight' | 'Academic Research' | 'Engineering Sprint' | 'Leadership';
  summary: string;
  highlights: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId: string;
  focusArea: string;
  verificationUrl: string;
  keyTakeaways: string[];
}

export interface LearningTrack {
  id: string;
  title: string;
  domain: string;
  cadence: string;
  currentFocus: string;
  completedMilestones: string[];
  nextDeliverable: string;
  referenceMaterial: string;
}

export const portfolioData = {
  personal: {
    name: 'Sai Saranya Avula',
    monogram: 'SSA',
    headline: 'Building Intelligence. Engineering Possibilities.',
    roles: [
      'AI & Machine Learning Engineer',
      'Applied Generative AI Developer',
      'Full-Stack React & Python Builder',
      'CSE-AIML Undergraduate @ Jain University',
    ],
    university: 'Jain (Deemed-to-be University), Faculty of Engineering & Technology',
    degree: 'B.Tech in Computer Science & Engineering (Artificial Intelligence & Machine Learning)',
    batch: '2023 – 2027 (2nd Year Undergraduate)',
    location: 'Bengaluru, Karnataka, India',
    availability: 'Open to Summer 2025 / 2026 AI, ML & Software Engineering Internships',
    email: 'saisaranya.avula@jainuniversity.ac.in',
    secondaryEmail: 'saisaranya.avula.dev@gmail.com',
    github: 'https://github.com/saisaranya-avula',
    githubHandle: 'github.com/saisaranya-avula',
    linkedin: 'https://www.linkedin.com/in/sai-saranya-avula',
    linkedinHandle: 'linkedin.com/in/sai-saranya-avula',
    shortBio:
      'Second-year Computer Science & Engineering (AI & ML) undergraduate at Jain University, Bengaluru. Focused on translating mathematical machine learning foundations, embedded sensor telemetry, and modern React/TypeScript interfaces into reliable, measurable software systems.',
    engineeringPhilosophy: [
      {
        index: '01',
        title: 'First-Principles Problem Framing',
        description:
          'Before reaching for complex neural architectures, I establish clean data pipelines, interpretable baseline models, and deterministic evaluation benchmarks.',
      },
      {
        index: '02',
        title: 'End-to-End Systems Ownership',
        description:
          'A machine learning model or hardware controller is only as useful as the interface and telemetry pipeline surrounding it. I build across Python backends, sensor loops, and TypeScript UIs.',
      },
      {
        index: '03',
        title: 'Rigorous Empirical Validation',
        description:
          'Every project is instrumentation-driven—evaluating precision/recall trade-offs, moisture actuation latency, or frontend interaction responsiveness under realistic constraints.',
      },
    ],
  },

  heroMetrics: [
    {
      value: '4',
      unit: 'End-to-End Systems',
      context: 'Engineered across AI/ML, IoT hardware, and full-stack web',
    },
    {
      value: '94.2%',
      unit: 'Diagnostic F1-Score',
      context: 'Cross-validated clinical classification benchmark in Scikit-Learn',
    },
    {
      value: '38%',
      unit: 'Water Saved in Trials',
      context: 'Closed-loop soil hygrometer & relay actuation controller',
    },
    {
      value: '2027',
      unit: 'B.Tech CSE-AIML Cohort',
      context: 'Jain University, Bengaluru · Active honours track',
    },
  ],

  skills: [
    {
      name: 'Python 3',
      category: 'Programming',
      proficiency: 'Core Stack',
      context: 'Primary language for ML pipelines, statistical modeling, data wrangling, and automation scripts',
      yearsOrProjects: '3+ yrs · 4 production & academic builds',
    },
    {
      name: 'Java (OOP)',
      category: 'Programming',
      proficiency: 'Core Stack',
      context: 'Object-oriented design, collections framework, multithreading, and algorithmic problem solving',
      yearsOrProjects: '2 yrs · University coursework & DSA track',
    },
    {
      name: 'TypeScript & JavaScript (ES2023)',
      category: 'Programming',
      proficiency: 'Applied Build',
      context: 'Strictly typed frontend state architectures, asynchronous data fetching, and interactive UI engineering',
      yearsOrProjects: '2 yrs · Web applications & dashboards',
    },
    {
      name: 'C & Embedded C',
      category: 'Programming',
      proficiency: 'Applied Build',
      context: 'Microcontroller ADC sampling, sensor calibration loops, and relay valve actuation logic',
      yearsOrProjects: 'Smart Irrigation Controller & systems lab',
    },
    {
      name: 'SQL (PostgreSQL & SQLite)',
      category: 'Programming',
      proficiency: 'Applied Build',
      context: 'Relational schema design, normalized indexing, complex joins, and analytical window queries',
      yearsOrProjects: 'DBMS coursework & analytics pipelines',
    },
    {
      name: 'Scikit-Learn',
      category: 'AI / Machine Learning',
      proficiency: 'Core Stack',
      context: 'Supervised classification/regression, GridSearchCV hyperparameter tuning, and ROC/confusion diagnostics',
      yearsOrProjects: 'Applied AI/ML Health Diagnostic Engine',
    },
    {
      name: 'NumPy & Pandas',
      category: 'AI / Machine Learning',
      proficiency: 'Core Stack',
      context: 'Vectorized matrix operations, missing-value imputation, feature scaling, and multivariate time-series cleaning',
      yearsOrProjects: 'Used across all data & ML repositories',
    },
    {
      name: 'Exploratory Data Analysis & Visualization',
      category: 'AI / Machine Learning',
      proficiency: 'Core Stack',
      context: 'Statistical hypothesis testing, correlation heatmaps, Matplotlib/Seaborn residual plots, and outlier profiling',
      yearsOrProjects: 'Data Science Analytics Pipeline',
    },
    {
      name: 'Generative AI & Prompt Engineering',
      category: 'AI / Machine Learning',
      proficiency: 'Active Exploration',
      context: 'Structured JSON output schemas, retrieval-augmented generation (RAG) workflows, and LLM evaluation',
      yearsOrProjects: 'Active research & prototype sprint',
    },
    {
      name: 'Deep Learning Foundations',
      category: 'AI / Machine Learning',
      proficiency: 'Active Exploration',
      context: 'Multi-layer perceptrons, backpropagation math, activation dynamics, and PyTorch tensor workflows',
      yearsOrProjects: 'AIML specialization track',
    },
    {
      name: 'React 19 & Component Architecture',
      category: 'Web Development',
      proficiency: 'Core Stack',
      context: 'Modular hooks, custom state providers, accessible modals, and zero-latency interactive visualizations',
      yearsOrProjects: 'Student Dev Hub & interactive portfolios',
    },
    {
      name: 'Tailwind CSS & Responsive Design',
      category: 'Web Development',
      proficiency: 'Core Stack',
      context: 'Design systems, dual-theme (dark/light) semantic color tokens, and fluid desktop-to-mobile grid layouts',
      yearsOrProjects: 'All frontend engineering projects',
    },
    {
      name: 'HTML5, CSS3 & Semantic Accessibility',
      category: 'Web Development',
      proficiency: 'Core Stack',
      context: 'WCAG AA contrast compliance, keyboard navigation (Cmd+K, Esc), and semantic landmark structure',
      yearsOrProjects: 'Core web engineering foundation',
    },
    {
      name: 'REST APIs & JSON Telemetry',
      category: 'Web Development',
      proficiency: 'Applied Build',
      context: 'Client-server contract design, asynchronous request handling, and structured payload validation',
      yearsOrProjects: 'Full-stack & IoT telemetry dashboards',
    },
    {
      name: 'Git & GitHub Workflows',
      category: 'Tools & Workflow',
      proficiency: 'Core Stack',
      context: 'Branching strategies, atomic commits, pull request documentation, and reproducible repository structure',
      yearsOrProjects: 'Daily version control workflow',
    },
    {
      name: 'JupyterLab & Google Colab',
      category: 'Tools & Workflow',
      proficiency: 'Core Stack',
      context: 'Reproducible notebook experiments, GPU-accelerated training runs, and documented benchmark reports',
      yearsOrProjects: 'ML experimentation & dataset profiling',
    },
    {
      name: 'VS Code, Vite & Linux CLI',
      category: 'Tools & Workflow',
      proficiency: 'Core Stack',
      context: 'Fast TypeScript bundling, linting with Oxlint/ESLint, shell scripting, and virtual environments',
      yearsOrProjects: 'Primary local development environment',
    },
    {
      name: 'Data Structures & Algorithms',
      category: 'Core Computer Science',
      proficiency: 'Core Stack',
      context: 'Trees, graphs, dynamic programming, hash maps, sorting invariants, and asymptotic time/space analysis',
      yearsOrProjects: '180+ algorithmic problems practiced',
    },
    {
      name: 'Object-Oriented Programming & Design',
      category: 'Core Computer Science',
      proficiency: 'Core Stack',
      context: 'Encapsulation, polymorphism, interface contracts, and modular software decomposition in Java & Python',
      yearsOrProjects: 'Core CSE curriculum & project builds',
    },
    {
      name: 'Database Management Systems & OS',
      category: 'Core Computer Science',
      proficiency: 'Applied Build',
      context: 'ACID transactions, B-tree indexing, process scheduling, memory paging, and concurrency primitives',
      yearsOrProjects: 'Jain University B.Tech core coursework',
    },
  ] as SkillItem[],

  projects: [
    {
      id: 'smart-irrigation-controller',
      index: '01',
      title: 'Smart Irrigation Controller',
      subtitle: 'Closed-Loop Embedded IoT Soil Telemetry & Automated Relay Actuation',
      category: 'Embedded & IoT',
      timeframe: 'Autumn 2024 · Embedded Systems & Python Telemetry',
      featuredSpan: 'wide',
      summary:
        'An autonomous precision-agriculture controller combining capacitive soil hygrometer arrays, temperature/humidity compensation, hysteresis-guarded relay valve actuation, and a Python serial telemetry logger.',
      problemStatement:
        'Conventional timer-based irrigation systems ignore real-time soil matric potential and evapotranspiration rates, leading to root-zone waterlogging and up to 40% water waste in semi-arid plots.',
      engineeringApproach:
        'Engineered a dual-threshold Schmitt-trigger control loop in Embedded C that samples soil moisture via 10-bit ADC channels, filters high-frequency capacitive noise using a 5-point moving median window, and actuates solenoid relays with dry-run pump protection.',
      architectureSteps: [
        {
          step: '01',
          title: 'Capacitive ADC Sensing & Moving-Median Denoising',
          detail:
            'Samples 3 root-zone moisture probes every 2 seconds, rejecting voltage spikes via a 5-sample sliding median filter.',
        },
        {
          step: '02',
          title: 'Hysteresis Control State Machine',
          detail:
            'Triggers solenoid valve open when volumetric moisture drops below 28% and latches closed at 62% to prevent relay chatter.',
        },
        {
          step: '03',
          title: 'Python Serial Telemetry & Anomaly Alerts',
          detail:
            'Streams JSON-formatted frames over UART to a Python analytics daemon that logs water volume dispensed and flags sensor disconnects.',
        },
      ],
      metrics: [
        {
          label: 'Water Consumption Reduction',
          value: '38.4%',
          context: 'Measured against fixed-schedule baseline over 21-day testbed cycle',
        },
        {
          label: 'Actuation Response Latency',
          value: '140 ms',
          context: 'From threshold crossing to relay coil energization',
        },
        {
          label: 'Sensor Noise Rejection',
          value: '99.1%',
          context: 'Spurious ADC spikes filtered prior to state transition',
        },
      ],
      techStack: ['Embedded C', 'Python 3', 'Microcontroller ADC', 'UART Serial Telemetry', 'Capacitive Hygrometers', 'Relay Control'],
      githubUrl: 'https://github.com/saisaranya-avula/smart-irrigation-controller',
      liveDemoNote: 'Interactive closed-loop moisture & relay hysteresis simulator available below',
      simulatorType: 'irrigation',
      codeSnippet: {
        filename: 'controller_loop.c',
        language: 'c',
        code: `// Hysteresis-guarded valve actuation with median noise rejection
uint16_t sample_filtered_moisture(uint8_t channel) {
    uint16_t window[5];
    for (int i = 0; i < 5; i++) {
        window[i] = adc_read_10bit(channel);
        delay_ms(10);
    }
    sort_uint16(window, 5);
    return calibrate_to_percentage(window[2]); // Median value
}

void update_irrigation_state(SystemState *sys) {
    uint16_t moisture = sample_filtered_moisture(PROBE_PRIMARY);
    if (moisture < sys->low_threshold && !sys->pump_active) {
        relay_set(SOLENOID_VALVE_1, HIGH);
        sys->pump_active = true;
    } else if (moisture >= sys->high_threshold && sys->pump_active) {
        relay_set(SOLENOID_VALVE_1, LOW);
        sys->pump_active = false;
    }
}`,
      },
    },
    {
      id: 'ai-ml-health-diagnostic-engine',
      index: '02',
      title: 'Applied AI/ML Health & Disease Diagnostic Engine',
      subtitle: 'Supervised Clinical Risk Classification & Feature Attribution Pipeline',
      category: 'Applied AI / ML',
      timeframe: 'Winter 2025 · Machine Learning & Clinical Informatics',
      featuredSpan: 'wide',
      summary:
        'A multi-model supervised diagnostic pipeline built with Python and Scikit-Learn that benchmarks Random Forest, Gradient Boosting, and Regularized Logistic Regression across clinical biomarker datasets with calibrated probability outputs.',
      problemStatement:
        'Raw clinical tabular datasets suffer from class imbalance, correlated physiological biomarkers, and opaque black-box predictions that make threshold selection hazardous for early screening.',
      engineeringApproach:
        'Constructed a reproducible Scikit-Learn Pipeline incorporating Stratified K-Fold cross-validation, RobustScaler outlier handling, SMOTE class balancing within training folds (preventing data leakage), and adjustable sensitivity/specificity operating thresholds.',
      architectureSteps: [
        {
          step: '01',
          title: 'Zero-Leakage Stratified Preprocessing',
          detail:
            'Applies median imputation and interquartile RobustScaler strictly inside each 5-fold cross-validation split.',
        },
        {
          step: '02',
          title: 'Ensemble Benchmarking & Hyperparameter Grid',
          detail:
            'Evaluates Logistic Regression (L2), Random Forest, and XGBoost/GradientBoosting across ROC-AUC, F1, and Brier calibration loss.',
        },
        {
          step: '03',
          title: 'Permutation Feature Importance & Threshold Tuning',
          detail:
            'Quantifies biomarker contribution and exposes a decision-threshold slider to prioritize high recall (sensitivity) in screening.',
        },
      ],
      metrics: [
        {
          label: 'Cross-Validated F1-Score',
          value: '94.2%',
          context: '5-fold stratified evaluation on held-out test partitions',
        },
        {
          label: 'Screening Sensitivity (Recall)',
          value: '96.8%',
          context: 'At calibrated clinical decision threshold tau = 0.38',
        },
        {
          label: 'ROC-AUC Area',
          value: '0.976',
          context: 'Outperforming baseline single decision tree by +11.4%',
        },
      ],
      techStack: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Stratified K-Fold', 'Statistical Evaluation'],
      githubUrl: 'https://github.com/saisaranya-avula/ai-health-diagnostic-engine',
      liveDemoNote: 'Interactive decision threshold & confusion matrix evaluator available in case study',
      simulatorType: 'diagnostic',
      codeSnippet: {
        filename: 'diagnostic_pipeline.py',
        language: 'python',
        code: `from sklearn.pipeline import Pipeline
from sklearn.preprocessing import RobustScaler
from sklearn.impute import SimpleImputer
from sklearn.ensemble import GradientBoostingClassifier
from sklearn.model_selection import StratifiedKFold, cross_validate

pipeline = Pipeline([
    ("imputer", SimpleImputer(strategy="median")),
    ("scaler", RobustScaler()),
    ("classifier", GradientBoostingClassifier(
        n_estimators=220, learning_rate=0.05, max_depth=4, random_state=42
    ))
])

cv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
scores = cross_validate(
    pipeline, X_train, y_train, cv=cv,
    scoring=["roc_auc", "f1", "recall", "precision"]
)`,
      },
    },
    {
      id: 'student-dev-hub',
      index: '03',
      title: 'Student Dev Hub',
      subtitle: 'Curated Engineering Resource Portal, Study Roadmaps & Peer Snippet Library',
      category: 'Full-Stack Web',
      timeframe: 'Spring 2025 · React, TypeScript & Tailwind CSS',
      featuredSpan: 'standard',
      summary:
        'A fast, keyboard-centric web portal engineered for CSE-AIML undergraduates to discover vetted coursework notes, interactive algorithm visualizers, lab templates, and semester study sprints.',
      problemStatement:
        'University engineering resources—lab manuals, syllabus roadmaps, and reference implementations—are fragmented across chat groups and unindexed drives, costing students hours during exam and project sprints.',
      engineeringApproach:
        'Designed a client-side indexed resource hub in React and TypeScript featuring instant multi-facet filtering (by subject, semester, and difficulty), persistent bookmark collections, and accessible keyboard navigation.',
      architectureSteps: [
        {
          step: '01',
          title: 'Typed Resource Taxonomy & Instant Search',
          detail:
            'Indexes 120+ curated CSE-AIML modules across DSA, OS, DBMS, and Machine Learning with sub-10ms client-side fuzzy matching.',
        },
        {
          step: '02',
          title: 'Persistent Sprint Tracker & Bookmarks',
          detail:
            'Synchronizes student reading progress and saved code templates to local storage with exportable JSON backups.',
        },
        {
          step: '03',
          title: 'Responsive Dual-Theme Interface',
          detail:
            'Built with semantic Tailwind tokens for distraction-free late-night study sessions on both desktop and mobile viewports.',
        },
      ],
      metrics: [
        {
          label: 'Indexed Study Modules',
          value: '125+',
          context: 'Covering Semesters 1–4 of B.Tech CSE-AIML curriculum',
        },
        {
          label: 'Search Filter Latency',
          value: '< 8 ms',
          context: 'Instant client-side multi-attribute filtering',
        },
        {
          label: 'Lighthouse Accessibility',
          value: '100 / 100',
          context: 'Full keyboard operability and WCAG AA contrast ratios',
        },
      ],
      techStack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Client-Side Search', 'Local Storage Sync'],
      githubUrl: 'https://github.com/saisaranya-avula/student-dev-hub',
      liveDemoNote: 'Interactive resource filter preview embedded in card & modal',
      simulatorType: 'devhub',
      codeSnippet: {
        filename: 'useResourceSearch.ts',
        language: 'typescript',
        code: `export function filterResources(
  items: ResourceItem[],
  query: string,
  track: TrackFilter
): ResourceItem[] {
  const normalized = query.trim().toLowerCase();
  return items.filter((item) => {
    const matchesTrack = track === 'ALL' || item.track === track;
    const matchesQuery =
      !normalized ||
      item.title.toLowerCase().includes(normalized) ||
      item.topics.some((t) => t.toLowerCase().includes(normalized));
    return matchesTrack && matchesQuery;
  });
}`,
      },
    },
    {
      id: 'data-science-analytics-pipeline',
      index: '04',
      title: 'Data Science Analytics Pipeline',
      subtitle: 'Automated Multivariate Statistical Profiling & Regression Diagnostics',
      category: 'Data Science',
      timeframe: 'Winter 2024 · Python, Pandas & Statistical Modeling',
      featuredSpan: 'standard',
      summary:
        'A modular Python data-engineering and statistical analysis suite that ingests raw messy CSV/JSON datasets, performs automated schema inference, detects multivariate anomalies, and fits regularized polynomial regression curves.',
      problemStatement:
        'Exploratory data analysis often involves repetitive boilerplate code for missing-value auditing, multicollinearity checks (VIF), and residual heteroscedasticity testing.',
      engineeringApproach:
        'Created a declarative Python pipeline using Pandas and NumPy that outputs structured data-health audits, computes Pearson/Spearman correlation matrices, and compares OLS against Ridge/Lasso regularization.',
      architectureSteps: [
        {
          step: '01',
          title: 'Automated Schema & Missingness Audit',
          detail:
            'Profiles column cardinality, skewness, kurtosis, and IQR outlier bounds across 50,000+ row tabular datasets.',
        },
        {
          step: '02',
          title: 'Collinearity & Feature Engineering',
          detail:
            'Calculates Variance Inflation Factors (VIF) and generates interaction terms with standardized z-score scaling.',
        },
        {
          step: '03',
          title: 'Regularized Regression & Residual Diagnostics',
          detail:
            'Fits Ridge (L2) and Lasso (L1) models across alpha penalties to prevent overfitting on noisy empirical observations.',
        },
      ],
      metrics: [
        {
          label: 'Out-of-Sample R² Score',
          value: '0.914',
          context: 'Ridge regression (alpha = 1.2) on multivariate benchmark dataset',
        },
        {
          label: 'Profiling Throughput',
          value: '50k rows/s',
          context: 'Vectorized Pandas & NumPy statistical summary generation',
        },
        {
          label: 'Feature Reduction via L1',
          value: '34%',
          context: 'Collinear noise variables pruned without loss of predictive power',
        },
      ],
      techStack: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Ridge & Lasso Regression', 'Statistical Profiling'],
      githubUrl: 'https://github.com/saisaranya-avula/data-science-analytics-pipeline',
      liveDemoNote: 'Interactive polynomial & regularization curve fitter inside case study',
      simulatorType: 'analytics',
      codeSnippet: {
        filename: 'profiler.py',
        language: 'python',
        code: `import numpy as np
import pandas as pd

def profile_numerical_features(df: pd.DataFrame) -> pd.DataFrame:
    num_df = df.select_dtypes(include=[np.number])
    q1 = num_df.quantile(0.25)
    q3 = num_df.quantile(0.75)
    iqr = q3 - q1
    outliers = ((num_df < (q1 - 1.5 * iqr)) | (num_df > (q3 + 1.5 * iqr))).sum()
    return pd.DataFrame({
        "mean": num_df.mean(),
        "std": num_df.std(),
        "skew": num_df.skew(),
        "iqr_outliers": outliers,
        "missing_pct": (num_df.isna().mean() * 100).round(2)
    })`,
      },
    },
  ] as ProjectItem[],

  experienceTimeline: [
    {
      id: 'internship-readiness-2025',
      period: 'Summer 2025 / 2026 Target',
      role: 'AI / Machine Learning & Software Engineering Intern Candidate',
      organization: 'Available for Immediate & Summer Cohorts',
      location: 'Bengaluru / Remote / Hybrid',
      type: 'Internship Spotlight',
      summary:
        'Actively seeking high-impact software engineering, applied AI/ML, or data science internships where I can contribute to production model pipelines, backend APIs, or interactive web applications.',
      highlights: [
        'Ready to ship production Python (Scikit-Learn, Pandas, FastAPI) and TypeScript/React codebases from day one.',
        'Strong foundation in Git collaborative workflows, unit testing, data preprocessing, and technical documentation.',
        'Available for full-time summer internship sprints and part-time semester research collaborations in Bengaluru.',
      ],
    },
    {
      id: 'applied-ai-research-sprint',
      period: 'Aug 2024 – Present',
      role: 'Undergraduate AI/ML Project Lead & Researcher',
      organization: 'Department of CSE (AI & ML), Jain University',
      location: 'Bengaluru, India',
      type: 'Academic Research',
      summary:
        'Leading applied coursework and independent laboratory builds focused on supervised clinical diagnostics, statistical profiling pipelines, and embedded sensor automation.',
      highlights: [
        'Designed and benchmarked the Applied AI/ML Health Diagnostic Engine achieving 94.2% F1-score across 5-fold cross-validation.',
        'Authored reproducible Jupyter notebooks documenting feature attribution, class-imbalance mitigation, and calibration curves.',
        'Collaborated with faculty mentors and peers on algorithm optimization and hardware-software co-design.',
      ],
    },
    {
      id: 'iot-embedded-systems-build',
      period: 'Jan 2024 – Jul 2024',
      role: 'Embedded Systems & Telemetry Developer',
      organization: 'University Engineering Innovation Lab',
      location: 'Bengaluru, India',
      type: 'Engineering Sprint',
      summary:
        'Engineered the Smart Irrigation Controller combining microcontroller C firmware with Python serial telemetry to automate root-zone water delivery.',
      highlights: [
        'Implemented a 5-point moving median ADC filter that eliminated 99.1% of capacitive probe voltage spikes.',
        'Reduced water consumption by 38.4% over a 21-day comparative testbed evaluation.',
      ],
    },
    {
      id: 'student-dev-community',
      period: 'Aug 2023 – Present',
      role: 'Core Contributor & Study Roadmap Maintainer',
      organization: 'CSE-AIML Peer Developer Collective',
      location: 'Jain University, Bengaluru',
      type: 'Leadership',
      summary:
        'Curating open study roadmaps, Java/Python DSA problem sets, and structured lab references for fellow undergraduate engineering students.',
      highlights: [
        'Launched the Student Dev Hub indexing 125+ coursework modules across Data Structures, OS, DBMS, and AIML.',
        'Conducted peer code reviews and collaborative debugging sessions ahead of semester practical assessments.',
      ],
    },
  ] as TimelineEntry[],

  education: {
    institution: 'Jain (Deemed-to-be University), Faculty of Engineering & Technology',
    location: 'Kanakapura Road Campus, Bengaluru, Karnataka',
    degree: 'Bachelor of Technology (B.Tech) — Computer Science & Engineering (AI & ML)',
    duration: '2023 – 2027',
    currentStatus: '2nd Year Undergraduate (Semester 4 in progress)',
    academicStanding: 'Consistent First-Class with Distinction Track',
    coreCoursework: [
      {
        code: 'CSM401',
        name: 'Machine Learning Foundations & Statistical Pattern Recognition',
        term: 'Year 2',
        focus: 'Supervised/unsupervised learning, bias-variance trade-off, cross-validation, ensemble methods',
      },
      {
        code: 'CSC302',
        name: 'Data Structures & Algorithms in Java & Python',
        term: 'Year 2',
        focus: 'AVL trees, graph traversals (BFS/DFS/Dijkstra), dynamic programming, asymptotic complexity',
      },
      {
        code: 'CSC304',
        name: 'Database Management Systems (DBMS)',
        term: 'Year 2',
        focus: 'Relational algebra, BCNF normalization, SQL query optimization, ACID transaction isolation',
      },
      {
        code: 'CSC305',
        name: 'Operating Systems & Systems Programming',
        term: 'Year 2',
        focus: 'Process synchronization, deadlocks, virtual memory paging, Linux kernel abstractions',
      },
      {
        code: 'MAT201',
        name: 'Linear Algebra, Probability & Multivariate Calculus for AI',
        term: 'Year 1–2',
        focus: 'Eigenvalues, SVD, Bayesian inference, probability distributions, gradient optimization',
      },
      {
        code: 'ESC102',
        name: 'Microcontrollers, Embedded C & Digital Logic Design',
        term: 'Year 1',
        focus: 'ADC interfacing, combinational/sequential circuits, UART/I2C protocols, relay actuation',
      },
    ],
    highlights: [
      'Specializing in Artificial Intelligence & Machine Learning with hands-on laboratory tracks in Python, Java, and Data Science.',
      'Active participant in university hackathons, coding sprints, and technical paper reading groups.',
      'Combining theoretical mathematical rigor (Linear Algebra & Bayesian Probability) with practical full-stack software delivery.',
    ],
  },

  certifications: [
    {
      id: 'cert-ml-foundations',
      title: 'Supervised Machine Learning: Regression and Classification',
      issuer: 'DeepLearning.AI & Stanford Online (Coursera)',
      issueDate: '2024',
      credentialId: 'DL-SML-2024-SSA',
      focusArea: 'Machine Learning & Gradient Descent',
      verificationUrl: 'https://www.coursera.org/',
      keyTakeaways: [
        'Implemented regularized linear and logistic regression from scratch using NumPy vectorization.',
        'Mastered feature scaling, polynomial regression, and diagnosing high bias vs. high variance.',
      ],
    },
    {
      id: 'cert-python-data-science',
      title: 'Python for Data Science, AI & Development',
      issuer: 'IBM Skills Network',
      issueDate: '2024',
      credentialId: 'IBM-PDS-2024-SSA',
      focusArea: 'Data Engineering & Scientific Python',
      verificationUrl: 'https://www.ibm.com/training',
      keyTakeaways: [
        'Built automated tabular ingestion and data cleaning pipelines with Pandas and NumPy.',
        'Worked with REST APIs, web scraping, and exploratory statistical visualization.',
      ],
    },
    {
      id: 'cert-java-dsa',
      title: 'Object-Oriented Programming & Data Structures in Java',
      issuer: 'NPTEL / AICTE Academic Certification Track',
      issueDate: '2024',
      credentialId: 'NPTEL-JAVA-2024-SSA',
      focusArea: 'Core Computer Science & Algorithms',
      verificationUrl: 'https://nptel.ac.in/',
      keyTakeaways: [
        'Engineered generic collection structures, custom comparators, exception hierarchies, and graph algorithms.',
        'Applied time and space complexity bounds to optimize recursive and iterative solutions.',
      ],
    },
    {
      id: 'cert-genai-essentials',
      title: 'Generative AI Fundamentals & Prompt Engineering for Developers',
      issuer: 'Google Cloud Skills Boost / DeepLearning.AI',
      issueDate: '2025',
      credentialId: 'GAI-DEV-2025-SSA',
      focusArea: 'Generative AI & LLM Systems',
      verificationUrl: 'https://www.cloudskillsboost.google/',
      keyTakeaways: [
        'Designed deterministic structured-output prompts, few-shot reasoning chains, and grounding safeguards.',
        'Explored embedding vector similarity search and retrieval-augmented generation architectures.',
      ],
    },
  ] as CertificationItem[],

  currentlyLearning: [
    {
      id: 'track-genai-rag',
      title: 'Generative AI & Retrieval-Augmented Generation (RAG)',
      domain: 'Applied AI Engineering',
      cadence: 'Weekly Sprint · 8 hrs/wk',
      currentFocus:
        'Building semantic document chunking pipelines, vector embeddings, and grounded citation synthesis with Gemini & open-weight models.',
      completedMilestones: [
        'Structured JSON schema enforcement & deterministic system prompting',
        'Cosine similarity vector search benchmark in NumPy',
        'Context-window token budgeting & hallucination guardrails',
      ],
      nextDeliverable: 'End-to-end Academic Paper Q&A Assistant with inline citation verification',
      referenceMaterial: 'Chip Huyen — AI Engineering (2025) & Gemini API Documentation',
    },
    {
      id: 'track-dsa-java',
      title: 'Advanced Data Structures & Graph Algorithms in Java',
      domain: 'Core Computer Science',
      cadence: 'Daily Practice · 1.5 hrs/day',
      currentFocus:
        'Mastering dynamic programming state transitions, monotonic stacks, tries, and shortest-path graph algorithms for technical interviews.',
      completedMilestones: [
        '180+ curated problems solved across arrays, trees, two-pointers, and heaps',
        'Implemented custom LRU Cache, Min-Heap, and Disjoint Set Union (Union-Find)',
        'Completed recursive backtracking & memoization pattern catalog',
      ],
      nextDeliverable: '250-problem milestone & timed competitive coding mock assessments',
      referenceMaterial: 'NeetCode 150 · CLRS Introduction to Algorithms',
    },
    {
      id: 'track-deep-learning',
      title: 'Deep Learning Architectures & PyTorch Workflows',
      domain: 'Machine Learning Specialization',
      cadence: 'Bi-Weekly Lab · 6 hrs/wk',
      currentFocus:
        'Transitioning from classical Scikit-Learn ensembles to PyTorch neural networks, custom autograd training loops, and CNN/Transformer internals.',
      completedMilestones: [
        'Forward and backward pass matrix calculus implemented in pure NumPy',
        'Batch normalization, dropout regularization, and AdamW optimizer experiments',
        'Multi-class tabular & image classification benchmark notebooks',
      ],
      nextDeliverable: 'Lightweight attention-based classifier with Grad-CAM / SHAP interpretability',
      referenceMaterial: 'Sebastian Raschka — Machine Learning with PyTorch and Scikit-Learn',
    },
    {
      id: 'track-fullstack-ts',
      title: 'Full-Stack TypeScript & Scalable API Design',
      domain: 'Software Engineering',
      cadence: 'Project-Driven · 5 hrs/wk',
      currentFocus:
        'Designing strongly-typed React 19 frontends paired with Python FastAPI / Node.js REST backends for real-time ML model inference.',
      completedMilestones: [
        'Strict TypeScript state architectures & custom hooks',
        'WCAG AA accessible modal, command palette, and dual-theme systems',
        'Asynchronous API error boundaries and optimistic UI updates',
      ],
      nextDeliverable: 'Containerized FastAPI + React inference playground for clinical risk models',
      referenceMaterial: 'React 19 Documentation & FastAPI Production Patterns',
    },
  ] as LearningTrack[],
};
