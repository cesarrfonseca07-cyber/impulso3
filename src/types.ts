export interface MultiLangString {
  en: string;
  es: string;
}

export interface Resource {
  id: number;
  title: string;
  url: string;
  whatIsIt: MultiLangString;
  useCase: MultiLangString;
  level: string; // Translation key: level_beginner, etc.
  utility: number;
  duration?: MultiLangString;
  certified?: MultiLangString;
  extraLabel?: MultiLangString;
}

export interface Section {
  id: string;
  title: MultiLangString;
  icon: string;
  resources: Resource[];
}
