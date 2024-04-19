
export type Lang = {
  lang:string,
  label:string,
}

export const langs : Record<string,Lang> = {
  'zh-CN':{
    lang: 'zh-CN',
    label: '简体中文',
  },
  en:{
    lang: 'en',
    label: 'English',
  }
}

export const defaultLang = langs['zh-CN'];

export type LocalesConfig<Config = any> = Record<string, Config>

export function localesOf<Config = any>(data:Record<string, Config>):LocalesConfig<Config>{
  return data;
}

