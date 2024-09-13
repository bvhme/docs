export const tokens = {
  themes: {
    default: {
      theme: {
        colors: {
          'secondary-text': '#555F6B',
          'secondary-100': '#F2F7FC',
          'secondary-200': '#EBF3FA',
          'secondary-300': '#E2EEF8',
          'secondary-400': '#DDEAF7',
          'secondary-500': '#D4E5F5',
          'secondary-600': '#C1D0DF',
          'secondary-700': '#97A3AE',
          'secondary-800': '#757E87',
          'secondary-900': '#596067',
          'info-text': '#FFFFFF',
          'info-100': '#EBF2FC',
          'info-200': '#8CB5EA',
          'info-300': '#5894E1',
          'info-400': '#377FDB',
          'info-500': '#055FD2',
          'info-600': '#0556BF',
          'info-700': '#044395',
          'info-800': '#033474',
          'info-900': '#022858',
          'greyscale-100': '#FAFAFB',
          'greyscale-200': '#F3F4F4',
          'greyscale-300': '#E7E8EA',
          'greyscale-400': '#C2C6CA',
          'greyscale-500': '#9EA3AA',
          'greyscale-600': '#79818A',
          'greyscale-700': '#555F6B',
          'greyscale-800': '#303C4B',
          'greyscale-900': '#0C1A2B',
          'greyscale-000': '#FFFFFF',
          'primary-100': '#EBF2FC',
          'primary-200': '#8CB5EA',
          'primary-300': '#5894E1',
          'primary-400': '#377FDB',
          'primary-500': '#055FD2',
          'primary-600': '#0556BF',
          'primary-700': '#044395',
          'primary-800': '#033474',
          'primary-900': '#022858',
          'success-100': '#EFFCD3',
          'success-200': '#DBFAA9',
          'success-300': '#BEF27C',
          'success-400': '#A0E659',
          'success-500': '#76D628',
          'success-600': '#5AB81D',
          'success-700': '#419A14',
          'success-800': '#2C7C0C',
          'success-900': '#1D6607',
          'warning-100': '#FFF8CD',
          'warning-200': '#FFEF9B',
          'warning-300': '#FFE469',
          'warning-400': '#FFDA43',
          'warning-500': '#FFC805',
          'warning-600': '#DBA603',
          'warning-700': '#B78702',
          'warning-800': '#936901',
          'warning-900': '#7A5400',
          'danger-100': '#F4B0B0',
          'danger-200': '#EE8A8A',
          'danger-300': '#E65454',
          'danger-400': '#E13333',
          'danger-500': '#DA0000',
          'danger-600': '#C60000',
          'danger-700': '#9B0000',
          'danger-800': '#780000',
          'danger-900': '#5C0000',
          'primary-text': '#FFFFFF',
          'success-text': '#FFFFFF',
          'warning-text': '#FFFFFF',
          'danger-text': '#FFFFFF',
        },
        font: {
          sizes: {
            h1: '2.2rem',
            h2: '1.7rem',
            h3: '1.37rem',
            h4: '1.15rem',
            h5: '1rem',
            h6: '0.87rem',
            l: '1rem',
            m: '0.8125rem',
            s: '0.75rem',
            ml: '0.938rem',
            xl: '1.50rem',
            t: '0.6875rem',
          },
          weights: {
            thin: 200,
            light: 300,
            regular: 400,
            medium: 500,
            bold: 600,
            extrabold: 700,
            black: 800,
          },
          families: {
            base: '"Roboto Flex Variable", sans-serif',
            accent: '"Roboto Flex Variable", sans-serif',
          },
          letterSpacings: {
            h1: 'normal',
            h2: 'normal',
            h3: 'normal',
            h4: 'normal',
            h5: '1px',
            h6: 'normal',
            l: 'normal',
            m: 'normal',
            s: 'normal',
          },
        },
        spacings: {
          '0': '0',
          xl: '4rem',
          l: '3rem',
          b: '1.625rem',
          s: '1rem',
          t: '0.5rem',
          st: '0.25rem',
          none: '0',
        },
        transitions: {
          'ease-in': 'cubic-bezier(0.32, 0, 0.67, 0)',
          'ease-out': 'cubic-bezier(0.33, 1, 0.68, 1)',
          'ease-in-out': 'cubic-bezier(0.65, 0, 0.35, 1)',
          duration: '250ms',
        },
        breakpoints: {
          xs: 0,
          sm: '576px',
          md: '768px',
          lg: '992px',
          xl: '1200px',
          xxl: '1400px',
        },
      },
      components: {
        card: {
          'box-shadow': 'none',
          'title-color': 'var(--c--theme--colors--primary-600)',
        },
        pill: {
          background: 'var(--c--theme--colors--primary-600)',
          color: 'var(--c--theme--colors--greyscale-000)',
          weight: 'bold',
          radius: '3px',
          'padding-x': '4px',
          'padding-y': '0',
        },
        strip: { color: 'var(--c--theme--colors--danger-500)' },
        grid: { color: 'var(--c--theme--colors--danger-900)' },
      },
    },
    dark: {
      theme: {
        colors: {
          'greyscale-100': '#182536',
          'greyscale-200': '#303C4B',
          'greyscale-300': '#555F6B',
          'greyscale-400': '#79818A',
          'greyscale-500': '#9EA3AA',
          'greyscale-600': '#C2C6CA',
          'greyscale-700': '#E7E8EA',
          'greyscale-800': '#F3F4F4',
          'greyscale-900': '#FAFAFB',
          'greyscale-000': '#0C1A2B',
          'primary-100': '#3B4C62',
          'primary-200': '#4D6481',
          'primary-300': '#6381A6',
          'primary-400': '#7FA5D5',
          'primary-500': '#8CB5EA',
          'primary-600': '#A3C4EE',
          'primary-700': '#C3D8F4',
          'primary-800': '#DDE9F8',
          'primary-900': '#F4F8FD',
          'success-100': '#EEF8D7',
          'success-200': '#D9F1B2',
          'success-300': '#BDE985',
          'success-400': '#A0E25D',
          'success-500': '#76D628',
          'success-600': '#5BB520',
          'success-700': '#43941A',
          'success-800': '#307414',
          'success-900': '#225D10',
          'warning-100': '#F7F3D5',
          'warning-200': '#F0E5AA',
          'warning-300': '#E8D680',
          'warning-400': '#E3C95F',
          'warning-500': '#D9B32B',
          'warning-600': '#BD9721',
          'warning-700': '#9D7B1C',
          'warning-800': '#7E6016',
          'warning-900': '#684D12',
          'danger-100': '#F8D0D0',
          'danger-200': '#F09898',
          'danger-300': '#F09898',
          'danger-400': '#ED8585',
          'danger-500': '#E96666',
          'danger-600': '#DD6666',
          'danger-700': '#C36666',
          'danger-800': '#AE6666',
          'danger-900': '#9D6666',
        },
      },
    },
    dsfr: {
      theme: {
        colors: {
          'primary-100': '#f5f5fe',
          'primary-150': '#F4F4FD',
          'primary-200': '#ececfe',
          'primary-300': '#e3e3fd',
          'primary-400': '#cacafb',
          'primary-500': '#6a6af4',
          'primary-600': '#000091',
          'primary-700': '#272747',
          'primary-800': '#21213f',
          'primary-900': '#1c1a36',
          'secondary-100': '#fee9ea',
          'secondary-200': '#fedfdf',
          'secondary-300': '#fdbfbf',
          'secondary-400': '#e1020f',
          'secondary-500': '#c91a1f',
          'secondary-600': '#5e2b2b',
          'secondary-700': '#3b2424',
          'secondary-800': '#341f1f',
          'secondary-900': '#2b1919',
          'greyscale-000': '#ffffff',
          'greyscale-100': '#eeeeee',
          'greyscale-200': '#e5e5e5',
          'greyscale-300': '#e1e1e1',
          'greyscale-400': '#dddddd',
          'greyscale-500': '#cecece',
          'greyscale-600': '#7b7b7b',
          'greyscale-700': '#666666',
          'greyscale-800': '#2a2a2a',
          'greyscale-900': '#1e1e1e',
          'success-text': '#1f8d49',
          'success-100': '#dffee6',
          'success-200': '#b8fec9',
          'success-300': '#88fdaa',
          'success-400': '#3bea7e',
          'success-500': '#1f8d49',
          'success-600': '#18753c',
          'success-700': '#204129',
          'success-800': '#1e2e22',
          'success-900': '#19281d',
          'info-text': '#0078f3',
          'info-100': '#f4f6ff',
          'info-200': '#e8edff',
          'info-300': '#dde5ff',
          'info-400': '#bdcdff',
          'info-500': '#0078f3',
          'info-600': '#0063cb',
          'info-700': '#f4f6ff',
          'info-800': '#222a3f',
          'info-900': '#1d2437',
          'warning-text': '#d64d00',
          'warning-100': '#fff4f3',
          'warning-200': '#ffe9e6',
          'warning-300': '#ffded9',
          'warning-400': '#ffbeb4',
          'warning-500': '#d64d00',
          'warning-600': '#b34000',
          'warning-700': '#5e2c21',
          'warning-800': '#3e241e',
          'warning-900': '#361e19',
          'danger-text': '#e1000f',
          'danger-100': '#fef4f4',
          'danger-200': '#fee9e9',
          'danger-300': '#fddede',
          'danger-400': '#fcbfbf',
          'danger-500': '#e1000f',
          'danger-600': '#c9191e',
          'danger-700': '#642727',
          'danger-800': '#412121',
          'danger-900': '#3a1c1c',
        },
        font: { families: { accent: 'Marianne', base: 'Marianne' } },
        logo: {
          src: '/assets/logo-gouv.svg',
          widthHeader: '110px',
          widthFooter: '220px',
          alt: 'Gouvernement Logo',
        },
      },
      components: {
        alert: {
          'border-radius': '0',
          'background-color': 'var(--c--theme--colors--greyscale-000)',
        },
        button: {
          'medium-height': '48px',
          'border-radius': '0',
          primary: {
            background: {
              color: 'var(--c--theme--colors--primary-600)',
              'color-hover': '#1212ff',
              'color-active': '#2323ff',
            },
            color: '#ffffff',
            'color-hover': '#ffffff',
            'color-active': '#ffffff',
          },
          'primary-text': {
            background: {
              'color-hover': 'var(--c--theme--colors--primary-100)',
              'color-active': 'var(--c--theme--colors--primary-100)',
            },
            'color-hover': 'var(--c--theme--colors--primary-text)',
          },
          secondary: {
            background: { 'color-hover': '#F6F6F6', 'color-active': '#EDEDED' },
            border: {
              color: 'var(--c--theme--colors--primary-600)',
              'color-hover': 'var(--c--theme--colors--primary-600)',
            },
            color: 'var(--c--theme--colors--primary-600)',
          },
          'tertiary-text': {
            background: {
              'color-hover': 'var(--c--theme--colors--primary-100)',
            },
            'color-hover': 'var(--c--theme--colors--primary-text)',
          },
        },
        card: {
          'box-shadow': '2px 2px 5px var(--c--theme--colors--greyscale-300)',
          'title-color': 'var(--c--theme--colors--primary-600)',
        },
        datagrid: {
          header: {
            color: 'var(--c--theme--colors--primary-600)',
            size: 'var(--c--theme--font--sizes--s)',
          },
          body: {
            'background-color': 'transparent',
            'background-color-hover': '#F4F4FD',
          },
          pagination: {
            'background-color': 'transparent',
            'background-color-active': 'var(--c--theme--colors--primary-300)',
          },
        },
        'forms-datepicker': { 'border-radius': '0' },
        'forms-fileuploader': { 'border-radius': '0' },
        'forms-input': {
          'background-color': 'var(--c--theme--colors--greyscale-100)',
          'border-radius': '0',
          'border-color': 'var(--c--theme--colors--greyscale-900)',
          'border-width': '0 0 2px 0',
          'border-color--focus': '#0974F6',
          'border-color--hover': 'var(--c--theme--colors--greyscale-900)',
          'label-color--focus':
            'var(--c--components--forms-labelledbox--label-color--small)',
        },
        'forms-textarea': {
          'background-color': 'var(--c--theme--colors--greyscale-100)',
          'border-radius': '0',
          'border-color': 'var(--c--theme--colors--greyscale-900)',
          'border-width': '0 0 2px 0',
          'border-color--focus': '#0974F6',
          'border-color--hover': 'var(--c--theme--colors--greyscale-900)',
          'label-color--focus':
            'var(--c--components--forms-labelledbox--label-color--small)',
        },
        'forms-select': {
          'background-color': 'var(--c--theme--colors--greyscale-100)',
          'border-radius': '0',
          'border-color': 'var(--c--theme--colors--greyscale-900)',
          'border-width': '0 0 2px 0',
          'border-color--focus': '#0974F6',
          'border-color--hover': 'var(--c--theme--colors--greyscale-900)',
          'label-color--focus':
            'var(--c--components--forms-labelledbox--label-color--big)',
        },
        'forms-switch': { 'accent-color': '#2323ff' },
        'forms-checkbox': { 'accent-color': '#2323ff' },
      },
    },
    openDesk: {
      theme: {
        colors: {
          'primary-100': '#F7F5FF',
          'primary-200': '#ECE7FE',
          'primary-300': '#DCD2FE',
          'primary-400': '#C8B9FD',
          'primary-500': '#8E75FA',
          'primary-600': '#7051FA',
          'primary-700': '#571EFA',
          'primary-800': '#4519C2',
          'primary-900': '#341291',
          'secondary-100': '#EDFDFB',
          'secondary-200': '#BFF9F2',
          'secondary-300': '#71EFE1',
          'secondary-400': '#00E6CC',
          'secondary-500': '#00A896',
          'secondary-600': '#008A7B',
          'secondary-700': '#006C60',
          'secondary-800': '#00564D',
          'secondary-900': '#004039',
          'greyscale-000': '#ffffff',
          'greyscale-100': '#EEEFF2',
          'greyscale-200': '#D3D7DE',
          'greyscale-300': '#B6BCC8',
          'greyscale-400': '#7C879C',
          'greyscale-500': '#637089',
          'greyscale-600': '#4D5B79',
          'greyscale-700': '#364768',
          'greyscale-800': '#203257',
          'greyscale-900': '#1e1e1e',
        },
        font: { families: { accent: 'Open Sans', base: 'Open Sans' } },
        logo: {
          src: '/assets/logo-opendesk.svg',
          widthHeader: '110px',
          widthFooter: '220px',
          alt: 'Gouvernement Logo',
        },
      },
      components: {
        alert: {
          'border-radius': '0',
          'background-color': 'var(--c--theme--colors--greyscale-000)',
        },
        button: {
          'medium-height': '48px',
          'border-radius': '8px',
          'font-weight': '600',
          primary: {
            background: {
              color: 'var(--c--theme--colors--primary-700)',
              'color-hover': 'var(--c--theme--colors--primary-900)',
              'color-active': 'var(--c--theme--colors--primary-900)',
            },
            color: '#ffffff',
            'color-hover': '#ffffff',
            'color-active': '#ffffff',
          },
          'primary-text': {
            background: {
              'color-hover': 'var(--c--theme--colors--primary-100)',
              'color-active': 'var(--c--theme--colors--primary-100)',
            },
            'color-hover': 'var(--c--theme--colors--primary-text)',
          },
          secondary: {
            background: { 'color-hover': '#F6F6F6', 'color-active': '#EDEDED' },
            border: {
              color: 'var(--c--theme--colors--primary-600)',
              'color-hover': 'var(--c--theme--colors--primary-600)',
            },
            color: 'var(--c--theme--colors--primary-600)',
          },
          'tertiary-text': {
            background: {
              'color-hover': 'var(--c--theme--colors--primary-100)',
            },
            'color-hover': 'var(--c--theme--colors--primary-text)',
          },
        },
        card: { 'title-color': 'var(--c--theme--colors--greyscale-900)' },
        datagrid: {
          header: {
            color: 'var(--c--theme--colors--greyscale-900)',
            size: 'var(--c--theme--font--sizes--s)',
          },
          body: {
            'background-color': 'transparent',
            'background-color-hover': '#F4F4FD',
          },
        },
        pill: {
          background: 'var(--c--theme--colors--primary-300)',
          color: 'var(--c--theme--colors--greyscale-900)',
          weight: '500',
          radius: '8px',
          'padding-x': '16px',
          'padding-y': '2px',
        },
        strip: { color: 'var(--c--theme--colors--primary-300)' },
        grid: { color: 'var(--c--theme--colors--greyscale-500)' },
      },
    },
  },
};
