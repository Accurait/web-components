import classNames from 'classnames'

const inputText = classNames(
  'sm:text-sm',
  'text-base',
  'text-gray-900',
  'dark:text-white',
  'placeholder-gray-400',
  'formkit-disabled:text-gray-400',
  'dark:formkit-disabled:text-gray-500'
)
const innerInvalid = classNames(
  'formkit-invalid:ring-red-500',
  'formkit-invalid:focus-within:ring-red-500',
  '[&>span:first-child]:formkit-invalid:focus-within:text-red-900',
  '[&>label:first-child]:formkit-invalid:focus-within:text-red-900'
)
const inputInvalid = classNames(
  // 'formkit-invalid:text-red-700',
  'formkit-invalid:text-red-900',
  'formkit-invalid:placeholder-red-700',
  'formkit-invalid:data-[placeholder="true"]:placeholder-red-700',
  'dark:formkit-invalid:text-red-400',
  // 'dark:formkit-invalid:placeholder-red-400'
  'dark:formkit-invalid:placeholder-red-500',
  'dark:formkit-invalid:data-[placeholder="true"]:placeholder-red-500'
)
const innerRing = classNames(
  'ring-1',
  'ring-gray-300',
  'dark:ring-gray-600',
  'focus-within:ring-2',
  'focus-within:ring-primary-500',
  '[&>span:first-child]:focus-within:text-primary-500',
  'dark:focus-within:ring-gray-300',
  'dark:[&>span:first-child]:focus-within:text-primary-500'
)

// The following Tailwind theme aspires to be a reproduction of the
// default optional Genesis CSS theme that ships with FormKit
export default {
  // Global styles apply to _all_ inputs with matching section keys
  global: {
    fieldset: classNames(
      'border',
      'border-gray-400',
      'rounded',
      'px-2',
      'pb-1'
    ),
    help: classNames(
      'text-sm',
      'font-normal',
      'text-gray-500',
      'dark:text-white'
    ),
    inner: classNames(
      // disabled
      'formkit-disabled:bg-gray-100',
      // 'formkit-disabled:transparent',
      'formkit-disabled:cursor-not-allowed',
      'formkit-disabled:pointer-events-none',
      // transition
      'transition',
      'duration-100'
    ),
    input: classNames(
      'appearance-none',
      'bg-transparent',
      // focus
      'focus:outline-none',
      'focus:ring-0',
      'focus:shadow-none',
      // transition
      'transition',
      'duration-100'
    ),
    label: classNames(
      'block',
      'mb-2',
      'text-sm',
      'font-medium',
      'text-gray-900',
      'dark:text-white',
      // invalid
      'formkit-invalid:text-red-700',
      // transition
      'transition',
      'duration-100'
    ),
    legend: classNames('font-bold', 'text-sm'),
    loaderIcon: classNames(
      'inline-flex',
      'items-center',
      'w-4',
      'text-gray-600',
      'animate-spin'
    ),
    message: classNames('text-sm', 'font-normal', 'text-red-600', 'transition'),
    messages: classNames('list-none', 'space-y-1', 'p-0', 'mt-1', 'mb-0'),
    outer: classNames(
      // 'formkit-disabled:opacity-50',
      'formkit-disabled:opacity-40'
    ),
    prefixIcon:
      'w-10 flex self-stretch grow-0 shrink-0 rounded-tl rounded-bl border-r border-gray-400 bg-white bg-gradient-to-b from-transparent to-gray-200 [&>svg]:w-full [&>svg]:max-w-[1em] [&>svg]:max-h-[1em] [&>svg]:m-auto',
    suffixIcon:
      'w-7 pr-3 flex self-stretch grow-0 shrink-0 [&>svg]:w-full [&>svg]:max-w-[1em] [&>svg]:max-h-[1em] [&>svg]:m-auto',
  },
  // Family styles apply to all inputs that share a common family
  // focus-within:border-primary-500 focus-within:ring-1 focus-within:ring-primary-500 dark:focus-within:border-gray-300 dark:focus-within:ring-gray-300
  'family:box': {
    decorator: classNames(
      'block',
      'relative',
      'h-5',
      'w-5',
      'mr-2',
      'rounded',
      'text-transparent',
      'bg-gray-50',
      'cursor-pointer',
      'ring-1',
      'ring-gray-300',
      // focus
      'peer-focus:outline',
      'peer-focus:outline-2',
      'peer-focus:outline-offset-[3px]',
      'peer-focus:outline-primary-500',
      // checked
      'peer-checked:ring-primary-500',
      'peer-checked:bg-primary-500',
      'peer-checked:text-white',
      // disabled
      'formkit-disabled:cursor-not-allowed',
      // invalid
      'formkit-invalid:bg-red-50',
      'formkit-invalid:ring-red-500',
      'formkit-invalid:peer-checked:ring-red-500',
      'formkit-invalid:peer-checked:bg-red-500',
      'formkit-invalid:peer-focus:outline-red-300'
    ),
    decoratorIcon: classNames(
      'flex',
      'p-[5px]',
      'w-full',
      'h-full',
      'absolute',
      'top-1/2',
      'left-1/2',
      '-translate-y-1/2',
      '-translate-x-1/2'
    ),
    options: classNames('flex', 'flex-wrap', 'gap-4'),
    fieldset: classNames('border-none', '!px-0'),
    help: classNames('mb-4'),
    inner: classNames(
      // disabled
      'formkit-disabled:bg-transparent',
      // invalid
      'formkit-invalid:bg-transparent',
      // transition
      'transition',
      'duration-100'
    ),
    input: classNames(
      'absolute',
      'w-0',
      'h-0',
      'overflow-hidden',
      'opacity-0',
      'pointer-events-none',
      'peer'
    ),
    label: classNames(
      '$reset',
      'select-none',
      'cursor-pointer',
      'formkit-disabled:cursor-not-allowed',
      'formkit-invalid:text-red-900'
    ),
    legend: classNames(
      'block',
      'mb-2',
      'text-sm',
      'font-medium',
      'text-gray-900',
      'dark:text-white',
      'formkit-invalid:text-red-900',
      'dark:formkit-invalid:text-red-400'
    ),
    wrapper: classNames('flex', 'items-center', 'mb-1'),
  },
  'family:button': {
    input: classNames(
      '$reset',
      'inline-flex',
      'items-center',
      'bg-primary-500',
      'text-white',
      'text-md',
      'font-normal',
      'px-4',
      'py-2',
      'rounded-lg',
      'transition',
      'duration-100',
      // text-white bg-primary focus:ring-primary-500
      // hover
      'hover:bg-primary-hover',
      // focus
      'focus:outline-none',
      'focus:ring-2',
      'focus:ring-primary-500',
      'focus-visible:ring-0',
      'focus-visible:outline-2',
      'focus-visible:outline-primary-500',
      'focus-visible:outline-offset-2',
      // disabled
      'formkit-disabled:bg-gray-400',
      // loading spinner
      'formkit-loading:before:w-4',
      'formkit-loading:before:h-4',
      'formkit-loading:before:mr-2',
      'formkit-loading:before:border',
      'formkit-loading:before:border-2',
      'formkit-loading:before:border-r-transparent',
      'formkit-loading:before:rounded-3xl',
      'formkit-loading:before:border-white',
      'formkit-loading:before:animate-spin'
    ),
    wrapper: classNames('mb-1'),
    prefixIcon: classNames(
      '$reset',
      'block',
      'w-4',
      '-ml-2',
      'mr-2',
      'stretch'
    ),
    suffixIcon: classNames('$reset', 'block', 'w-4', 'ml-2', 'stretch'),
  },
  'family:dropdown': {
    dropdownWrapper: classNames(
      'my-2',
      'w-full',
      'drop-shadow-lg',
      'rounded-lg',
      '[&::-webkit-scrollbar]:hidden'
    ),
    emptyMessageInner: classNames(
      'flex',
      'items-center',
      'justify-center',
      'text-sm',
      'p-2',
      'text-center',
      'w-full',
      'text-gray-500',
      '[&>span]:mr-3',
      '[&>span]:ml-0'
    ),
    inner: classNames(
      'relative',
      'flex',
      'bg-gray-50',
      innerRing,
      'rounded-lg',
      'mb-1',
      'formkit-disabled:focus-within:ring-gray-300',
      'formkit-disabled:focus-within:ring-1',
      innerInvalid
    ),
    input: classNames('w-full', 'p-2.5', inputText, inputInvalid),
    listbox: classNames(
      'bg-white',
      'drop-shadow-lg',
      'rounded-lg',
      'overflow-hidden'
    ),
    listboxButton: classNames(
      'flex',
      'w-12',
      'self-stretch',
      'justify-center',
      'mx-auto'
    ),
    listitem: classNames(
      'pl-7',
      'relative',
      'hover:cursor-pointer',
      'hover:bg-gray-200',
      'data-[is-active="true"]:cursor-pointer',
      'data-[is-active="true"]:bg-gray-200',
      'data-[is-active="true"]:aria-selected:bg-primary-500',
      'aria-selected:bg-primary-500',
      'aria-selected:text-white',
      'transition',
      'duration-100'
    ),
    loaderIcon: classNames('ml-auto'),
    loadMoreInner: classNames(
      'flex',
      'items-center',
      'justify-center',
      'text-sm',
      'p-2',
      'text-center',
      'w-full',
      'text-primary-500',
      'formkit-loading:text-gray-500',
      'cursor-pointer',
      '[&>span]:mr-3',
      '[&>span]:ml-0'
    ),
    option: classNames('p-2.5', 'sm:text-sm'),
    optionLoading: classNames('text-gray-500'),
    placeholder: classNames(
      'p-2.5',
      'sm:text-sm',
      'text-gray-400',
      'formkit-invalid:text-red-700'
    ),
    selector: classNames(
      'flex',
      'w-full',
      'justify-between',
      'items-center',
      '[&u]',
      'focus-visible:outline-none',
      'text-gray-900',
      'dark:text-white',
      'formkit-invalid:text-red-900'
    ),
    selectedIcon: classNames(
      'block',
      'absolute',
      'top-1/2',
      'left-2',
      'w-3',
      '-translate-y-1/2'
    ),
    selectIcon: classNames(
      'flex',
      'box-content',
      'w-4',
      'px-2',
      'self-stretch',
      'grow-0',
      'shrink-0'
    ),
  },
  'family:text': {
    inner: classNames(
      'flex',
      'items-center',
      'bg-gray-50',
      innerRing,
      'rounded-lg',
      'mb-1',
      innerInvalid
    ),
    input: classNames(
      'w-full',
      'p-2.5',
      'border-none',
      inputText,
      inputInvalid
    ),
  },
  'family:date': {
    inner: classNames(
      'flex',
      'items-center',
      'bg-gray-50',
      innerRing,
      'rounded-lg',
      'mb-1',
      innerInvalid
    ),
    input: classNames(
      'w-full',
      'p-2.5',
      'border-none',
      inputText,
      inputInvalid
    ),
  },
  // Specific styles apply only to a given input type
  color: {
    inner: classNames(
      'flex',
      'max-w-[5.5em]',
      'w-full',
      'formkit-prefix-icon:max-w-[7.5em]',
      'formkit-suffix-icon:formkit-prefix-icon:max-w-[10em]'
    ),
    input: classNames(
      '$reset',
      'appearance-none',
      'w-full',
      'cursor-pointer',
      'border-none',
      'rounded',
      'p-0',
      'm-0',
      'bg-transparent',
      '[&::-webkit-color-swatch-wrapper]:p-0',
      '[&::-webkit-color-swatch]:border-none'
    ),
    suffixIcon: classNames('min-w-[2.5em]', 'pr-0', 'pl-0', 'm-auto'),
  },
  file: {
    fileItem: classNames(
      'flex',
      'items-center',
      'text-gray-800',
      'mb-1',
      'last:mb-0'
    ),
    fileItemIcon: classNames('w-4', 'mr-2', 'shrink-0'),
    fileList: classNames(
      'shrink',
      'grow',
      'peer',
      'px-3',
      'py-2',
      'formkit-multiple:data-[has-multiple="true"]:mb-6'
    ),
    fileName: classNames('break-all', 'grow', 'text-ellipsis'),
    fileRemove: classNames(
      'relative',
      'z-[2]',
      'ml-auto',
      'text-[0px]',
      'hover:text-red-500',
      'pl-2',
      'peer-data-[has-multiple=true]:text-sm',
      'peer-data-[has-multiple=true]:text-primary-500',
      'peer-data-[has-multiple=true]:ml-3',
      'peer-data-[has-multiple=true]:mb-2',
      'formkit-multiple:bottom-[0.15em]',
      'formkit-multiple:pl-0',
      'formkit-multiple:ml-0',
      'formkit-multiple:left-[1em]',
      'formkit-multiple:formkit-prefix-icon:left-[3.75em]'
    ),
    fileRemoveIcon: classNames(
      'block',
      'text-base',
      'w-3',
      'relative',
      'z-[2]'
    ),
    inner: classNames(
      'relative',
      // 'max-w-md',
      'cursor-pointer',
      'formkit-multiple:[&>button]:absolute'
    ),
    input: classNames(
      'cursor-pointer',
      'text-transparent',
      'absolute',
      'top-0',
      'right-0',
      'left-0',
      'bottom-0',
      'opacity-0',
      'z-[2]'
    ),
    noFiles: classNames(
      'flex',
      'w-full',
      'items-center',
      'px-3',
      'py-2',
      'text-gray-400'
    ),
    noFilesIcon: classNames('w-4', 'mr-2'),
  },
  form: {
    messages: classNames(
      'border-red-300',
      'bg-red-50',
      'rounded-lg',
      'border',
      'p-4',
      'text-sm',
      'space-y-1',
      'list-none'
    ),
    message: classNames('text-sm', 'font-normal', 'text-red-700', 'transition'),
  },
  radio: {
    decorator: classNames('rounded-full'),
    decoratorIcon: classNames('w-5', 'p-[5px]'),
  },
  range: {
    inner: classNames(
      '$reset',
      // 'max-w-md',
      'flex',
      'items-center'
    ),
    input: classNames('$reset', 'w-full', 'mb-1', 'h-2', 'p-0', 'rounded-full'),
    prefixIcon: classNames(
      '$reset',
      'w-4',
      'mr-1',
      'flex',
      'self-stretch',
      'grow-0',
      'shrink-0',
      '[&>svg]:max-w-[1em]',
      '[&>svg]:max-h-[1em]',
      '[&>svg]:m-auto'
    ),
    suffixIcon: classNames(
      '$reset',
      'w-4',
      'ml-1',
      'flex',
      'self-stretch',
      'grow-0',
      'shrink-0',
      '[&>svg]:max-w-[1em]',
      '[&>svg]:max-h-[1em]',
      '[&>svg]:m-auto'
    ),
  },
  select: {
    inner: classNames(
      'flex',
      'relative',
      'items-center',
      'rounded-lg',
      'mb-1',
      'bg-gray-50',
      innerRing,
      innerInvalid
    ),
    input: classNames(
      'w-full',
      'pl-2.5',
      'pr-8',
      'py-2.5',
      'border-none',
      inputText,
      'formkit-multiple:p-0',
      'data-[placeholder="true"]:text-gray-400',
      'formkit-multiple:data-[placeholder="true"]:text-inherit',
      inputInvalid
    ),
    selectIcon: classNames(
      'flex',
      'p-[3px]',
      'shrink-0',
      'w-6',
      'mr-2',
      '-ml-[1.5em]',
      'h-full',
      'pointer-events-none',
      '[&>svg]:w-full',
      '[&>svg]:h-4',
      '[&>svg]:max-w-[1rem]',
      '[&>svg]:max-h-[1rem]',
      '[&>svg]:m-auto'
    ),
    option: classNames(
      'formkit-multiple:p-3',
      'formkit-multiple:text-sm',
      'text-gray-700'
    ),
  },
  textarea: {
    inner: classNames(
      'flex',
      // 'max-w-md',
      'rounded-lg',
      'mb-1',
      'bg-gray-50',
      innerRing,
      innerInvalid
    ),
    input: classNames(
      'block',
      'w-full',
      'h-32',
      'px-3',
      'py-3',
      'border-none',
      'text-base',
      'text-gray-700',
      'placeholder-gray-400',
      'focus:shadow-outline',
      inputInvalid
    ),
    inputText,
  },
  // PRO input styles
  autocomplete: {
    closeIcon: classNames('block', 'grow-0', 'shrink-0', 'w-3', 'mr-3.5'),
    inner: classNames(
      '[&>div>[data-value]]:absolute',
      '[&>div>[data-value]]:mb-0'
    ),
    option: classNames('grow', 'text-ellipsis'),
    selection: classNames(
      'static',
      'flex',
      'left-0',
      'top-0',
      'right-0',
      'bottom-0',
      'mt-0',
      'mb-2',
      'rounded',
      'bg-gray-100'
    ),
  },
  datepicker: {
    inner: classNames('relative'),
    panelWrapper: classNames(
      'absolute',
      'top-[calc(100%_+_0.5em)]',
      'drop-shadow-[0_0_1.25em_rgba(0,0,0,.25)]',
      'rounded-md',
      'p-4',
      'bg-white',
      'z-10'
    ),
    panelHeader: classNames(
      'grid',
      'grid-cols-[2.5em_1fr_2.5em]',
      'justify-center',
      'items-center',
      'border-b-2',
      'mb-3',
      'pb-3'
    ),
    // input: classNames('selection:bg-primary-500'),
    monthsHeader: classNames(
      'flex',
      'items-center',
      'justify-center',
      'col-start-2',
      'col-end-2'
    ),
    timeHeader: classNames(
      'flex',
      'items-center',
      'justify-center',
      'col-start-2',
      'col-end-2'
    ),
    overlayPlaceholder: 'text-gray-400',
    months: classNames('flex', 'flex-wrap'),
    month: classNames(
      'flex',
      'items-center',
      'justify-center',
      'w-[calc(33%_-_1em)]',
      'm-2',
      'p-2',
      'rounded-md',
      'bg-gray-200',
      'aria-selected:bg-primary-500',
      'aria-selected:text-white',
      'focus:outline',
      'group:focus:outline-2',
      'focus:outline-primary-500',
      'focus:outline-offset-2',
      'focus:bg-white',
      'focus:text-black',
      'data-[is-extra=true]:opacity-25',
      'formkit-disabled:opacity-50',
      'formkit-disabled:cursor-default',
      'formkit-disabled:pointer-events-none',
      'cursor-pointer'
    ),
    yearsHeader: classNames(
      'flex',
      'items-center',
      'justify-center',
      'col-start-2',
      'col-end-2'
    ),
    years: classNames('flex', 'flex-wrap', 'max-w-[35em]'),
    year: classNames(
      'flex',
      'items-center',
      'justify-center',
      'w-[calc(20%_-_1em)]',
      'm-2',
      'p-2',
      'rounded-md',
      'bg-gray-200',
      'aria-selected:bg-primary-500',
      'aria-selected:text-white',
      'focus:outline',
      'focus:outline-2',
      'focus:outline-primary-500',
      'focus:outline-offset-2',
      'focus:bg-white',
      'focus:text-black',
      'data-[is-extra=true]:opacity-25',
      'formkit-disabled:opacity-50',
      'formkit-disabled:cursor-default',
      'formkit-disabled:pointer-events-none',
      'cursor-pointer'
    ),
    weekDays: classNames('flex'),
    weekDay: classNames(
      'flex',
      'flex-auto',
      'h-[1em]',
      'm-1',
      'text-sm',
      'items-center',
      'justify-center',
      'rounded-md',
      'font-medium',
      'lowercase'
    ),
    week: classNames(
      'flex',
      'formkit-disabled:opacity-50',
      'formkit-disabled:cursor-default',
      'formkit-disabled:pointer-events-none'
    ),
    day: classNames(
      'flex',
      'items-center',
      'justify-center',
      'text-sm',
      'w-[1.8em]',
      'h-[1.8em]',
      'm-1',
      'p-2',
      'rounded-md',
      'bg-gray-200',
      'transition',
      'duration-100'
    ),
    timeInput: classNames(
      'w-full',
      'border-2',
      'border-gray-300',
      'rounded-md',
      'p-2',
      'my-[2em]',
      'focus-visible:outline-primary-500'
    ),
    daysHeader: 'flex items-center justify-center',
    prev: classNames(
      'mr-auto',
      'px-3',
      'py-1',
      'rounded-md',
      'hover:bg-gray-100',
      'focus-visible:outline-primary-500',
      'focus-visible:outline-primary-500',
      'col-start-1',
      'col-end-1'
    ),
    prevLabel: 'hidden',
    prevIcon: classNames('flex', 'w-2', 'select-none', '[&>svg]:w-full'),
    dayButton: classNames(
      'appearance-none',
      'cursor-pointer',
      'text-sm',
      'px-3',
      'py-1',
      'border-2',
      'rounded-lg',
      'mx-1',
      'hover:border-primary-500'
    ),
    monthButton: classNames(
      'appearance-none',
      'cursor-pointer',
      'text-sm',
      'px-3',
      'py-1',
      'border-2',
      'rounded-lg',
      'mx-1',
      'hover:border-primary-500',
      'focus:outline-primary-500'
    ),
    yearButton: classNames(
      'appearance-none',
      'cursor-pointer',
      'text-sm',
      'px-3',
      'py-1',
      'border-2',
      'rounded-lg',
      'mx-1',
      'hover:border-primary-500',
      'focus:outline-primary-500'
    ),
    next: classNames(
      'ml-auto',
      'px-3',
      'py-1',
      'rounded-md',
      'hover:bg-gray-100',
      'focus-visible:outline-primary-500',
      'col-start-3',
      'col-end-3'
    ),
    nextLabel: 'hidden',
    nextIcon: classNames('flex', 'w-2', 'select-none', '[&>svg]:w-full'),
    openButton: classNames(
      'appearance-none',
      'border-0',
      'bg-transparent',
      'flex',
      'p-0',
      'self-stretch',
      'cursor-pointer',
      'focus-visible:outline-none',
      'focus-visible:text-white',
      'focus-visible:bg-primary-500'
    ),
    calendarIcon: classNames(
      'flex',
      'w-8',
      'grow-0',
      'shrink-0',
      'self-stretch',
      'select-none',
      '[&>svg]:w-full',
      '[&>svg]:m-auto',
      '[&>svg]:max-h-[1em]',
      '[&>svg]:max-w-[1em]'
    ),
  },
  mask: {
    inner: classNames(
      'flex',
      'items-center',
      // 'max-w-md',
      innerRing,
      'rounded-lg',
      'mb-1'
    ),
    input: classNames('w-full', 'p-2.5', 'border-none', inputText),
  },
  rating: {
    inner: classNames(
      'relative',
      'flex',
      'items-center',
      'w-[8em]',
      'formkit-disabled:bg-transparent'
    ),
    itemsWrapper: 'w-full',
    onItems: 'text-yellow-400',
    onItemWrapper: classNames(
      '[&>*]:w-full',
      '[&>svg]:h-auto',
      '[&>svg]:max-w-none',
      '[&>svg]:max-h-none'
    ),
    offItems: 'text-gray-500',
    offItemWrapper: classNames(
      '[&>*]:w-full',
      '[&>svg]:h-auto',
      '[&>svg]:max-w-none',
      '[&>svg]:max-h-none'
    ),
  },
  repeater: {
    content: classNames('grow', 'p-3', 'flex', 'flex-col', 'align-center'),
    controlLabel: classNames('absolute', 'opacity-0', 'pointer-events-none'),
    controls: classNames(
      'flex',
      'flex-col',
      'items-center',
      'justify-center',
      'bg-gray-100',
      'p-3'
    ),
    downControl: classNames(
      'hover:text-primary-500',
      'disabled:hover:text-inherit',
      'disabled:opacity-25'
    ),
    fieldset: classNames('py-4', 'px-5'),
    help: classNames('mb-2', 'mt-1.5'),
    item: classNames(
      'flex',
      'w-full',
      'mb-1',
      'rounded',
      'border',
      'border-gray-200'
    ),
    moveDownIcon: classNames('block', 'w-3', 'my-1'),
    moveUpIcon: classNames('block', 'w-3', 'my-1'),
    removeControl: classNames(
      'hover:text-primary-500',
      'disabled:hover:text-inherit',
      'disabled:opacity-25'
    ),
    removeIcon: classNames('block', 'w-5', 'my-1'),
    upControl: classNames(
      'hover:text-primary-500',
      'disabled:hover:text-inherit',
      'disabled:opacity-25'
    ),
  },
  slider: {
    outer: classNames('max-w-md'),
    help: classNames('mt-0', 'mb-1'),
    sliderInner: classNames(
      'flex',
      'items-center',
      'py-1',
      '[&>.formkit-max-value]:mb-0',
      '[&>.formkit-max-value]:ml-8',
      '[&>.formkit-max-value]:shrink',
      '[&>.formkit-max-value]:grow-0',
      '[&>.formkit-icon]:bg-none',
      '[&>.formkit-icon]:border-none',
      '[&>.formkit-icon]:p-0',
      '[&>.formkit-icon]:w-4',
      '[&>.formkit-prefix-icon]:mr-2',
      '[&>.formkit-suffix-icon]:ml-2',
      '[&[data-has-mark-labels="true"]_.formkit-track]:mb-4'
    ),
    track: classNames('grow', 'relative', 'z-[3]', 'py-1'),
    trackWrapper: classNames('px-[2px]', 'rounded-full', 'bg-gray-200'),
    trackInner: classNames('h-[6px]', 'mx-[2px]', 'relative'),
    fill: classNames(
      'h-full',
      'rounded-full',
      'absolute',
      'top-0',
      'mx-[-4px]',
      'bg-blue-500'
    ),
    marks: classNames(
      'absolute',
      'pointer-events-none',
      'left-0',
      'right-0',
      'top-0',
      'bottom-0'
    ),
    mark: classNames(
      'absolute',
      'top-1/2',
      'w-[3px]',
      'h-[3px]',
      'rounded-full',
      '-translate-x-1/2',
      '-translate-y-1/2',
      'bg-gray-400',
      'data-[active="true"]:bg-white'
    ),
    markLabel: classNames(
      'absolute',
      'top-[calc(100%+0.5em)]',
      'left-1/2',
      'text-gray-400',
      'text-[0.66em]',
      '-translate-x-1/2'
    ),
    handles: classNames('m-0', 'p-0', 'list-none'),
    handle: classNames(
      'group',
      'w-4',
      'h-4',
      'rounded-full',
      'bg-white',
      'absolute',
      'top-1/2',
      'left-0',
      'z-[2]',
      '-translate-x-1/2',
      '-translate-y-1/2',
      'shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1),0_1px_2px_0_rgba(0,0,0,0.8)]',
      'focus-visible:outline-0',
      'focus-visible:ring-2',
      'ring-blue-500',
      'data-[is-target="true"]:z-[3]'
    ),
    tooltip: classNames(
      'absolute',
      'bottom-full',
      'left-1/2',
      '-translate-x-1/2',
      '-translate-y-[4px]',
      'bg-blue-500',
      'text-white',
      'py-1',
      'px-2',
      'text-xs',
      'leading-none',
      'whitespace-nowrap',
      'rounded-sm',
      'opacity-0',
      'pointer-events-none',
      'transition-opacity',
      'after:content-[""]',
      'after:absolute',
      'after:top-full',
      'after:left-1/2',
      'after:-translate-x-1/2',
      'after:-translate-y-[1px]',
      'after:border-4',
      'after:border-transparent',
      'after:border-t-blue-500',
      'group-hover:opacity-100',
      'group-focus-visible:opacity-100',
      'group-data-[show-tooltip="true"]:opacity-100'
    ),
    linkedValues: classNames('flex', 'items-start', 'justify-between'),
    minValue: classNames(
      'grow',
      'max-w-[45%]',
      'mb-0',
      'relative',
      '[&_.formkit-inner::after]:content-[""]',
      '[&_.formkit-inner::after]:absolute',
      '[&_.formkit-inner::after]:left-[105%]',
      '[&_.formkit-inner::after]:-translate-y-1/2',
      '[&_.formkit-inner::after]:w-[10%]',
      '[&_.formkit-inner::after]:h-[1px]',
      '[&_.formkit-inner::after]:bg-gray-500'
    ),
    maxValue: classNames('grow', 'max-w-[45%]', 'mb-0', 'relative'),
    chart: classNames(
      'relative',
      'z-[2]',
      'mb-2',
      'flex',
      'justify-between',
      'items-center',
      'w-full',
      'aspect-[3/1]'
    ),
    chartBar: classNames(
      'absolute',
      'bottom-0',
      'h-full',
      'bg-gray-400',
      'opacity-[.66]',
      'data-[active="false"]:opacity-[.25]'
    ),
  },
  taglist: {
    input: classNames('px-1', 'py-1', '!w-[0%]', 'grow'),
    removeSelection: classNames(
      'w-2.5',
      'mx-1',
      'self-center',
      'text-black',
      'leading-none',
      // invalid
      'formkit-invalid:text-white',
      // transition
      'transition',
      'duration-100'
    ),
    tag: classNames(
      'flex',
      'items-center',
      'my-1',
      'p-1',
      'bg-gray-200',
      'text-xs',
      'rounded-full',
      // invalid
      'formkit-invalid:bg-red-500',
      'formkit-invalid:text-white',
      // transition
      'transition',
      'duration-100'
    ),
    tagWrapper: classNames(
      'mr-1',
      'focus:outline-none',
      'focus:text-white',
      '[&>div]:focus:bg-primary-500',
      '[&>div>button]:focus:text-white',
      // invalid
      'formkit-invalid:focus:text-white',
      'formkit-invalid:[&>div]:focus:bg-red-700',
      'formkit-invalid:[&>div]:focus:text-white',
      // transition
      'transition',
      'duration-100'
    ),
    tagLabel: 'pl-2 pr-1',
    tags: classNames(
      'flex',
      'items-center',
      'flex-wrap',
      'w-full',
      'py-1.5',
      'px-2'
    ),
  },
  toggle: {
    altLabel:
      'block w-full mb-1 font-medium text-sm text-gray-900 ' +
      // invalid
      'formkit-invalid:text-red-700 ' +
      // transition
      'transition ' +
      'duration-100',
    inner: '$reset inline-block mr-2',
    input: 'peer absolute opacity-0 pointer-events-none',
    innerLabel:
      'text-primary text-[10px] absolute left-full top-1/2 -translate-x-full -translate-y-1/2 px-1.5',
    thumb:
      'relative left-0 aspect-square rounded-full transition-all w-5 bg-white border border-gray-300',
    track:
      'p-1 ' +
      'min-w-[3.4em] ' +
      'relative ' +
      'rounded-full ' +
      'transition-all ' +
      'bg-gray-50 ' +
      'ring-1 ' +
      'ring-gray-300 ' +
      // focus
      'peer-focus:ring-2 ' +
      'peer-focus:ring-primary-500 ' +
      // checked
      'peer-checked:bg-primary ' +
      'peer-checked:[&>div:last-child]:left-full ' +
      'peer-checked:[&>div:last-child]:-translate-x-full ' +
      'peer-checked:[&>div:first-child:not(:last-child)]:left-0 ' +
      'peer-checked:[&>div:first-child:not(:last-child)]:translate-x-0 ' +
      'peer-checked:[&>div:first-child:not(:last-child)]:text-white ' +
      // invalid
      'formkit-invalid:bg-red-50 ' +
      'formkit-invalid:ring-red-500 ' +
      'formkit-invalid:peer-checked:ring-red-300 ' +
      'formkit-invalid:peer-checked:bg-red-500 ' +
      '',
    label:
      'font-normal ' +
      'text-sm ' +
      'text-gray-900 ' +
      '!mb-0 ' +
      // invalid
      'formkit-invalid:text-red-900 ' +
      // transition
      'transition ' +
      'duration-100',
    valueLabel: 'text-sm text-gray-900 mb-0 formkit-invalid:text-red-900',
    wrapper: 'flex flex-wrap items-center mb-1',
  },
  transferlist: {
    outer: classNames(
      '[&_.dnd-placeholder]:bg-primary-500',
      '[&_.dnd-placeholder]:text-white',
      '[&_.dnd-placeholder_svg]:text-white',
      '[&_.dnd-children-hidden]:w-full',
      '[&_.dnd-children-hidden]:p-0',
      '[&_.dnd-children-hidden]:flex',
      '[&_.dnd-children-hidden]:flex-col',
      '[&_.dnd-children-hidden]:border-none',
      '[&_.dnd-children-hidden_span]:hidden',
      '[&_.dnd-children-hidden_.formkit-transferlist-option]:hidden',
      '[&_.dnd-multiple-selections_span]:inline-block',
      '[&_.dnd-multiple-selections_.formkit-transferlist-option]:inline-block'
    ),
    fieldset: '$reset max-w-2xl',
    wrapper: classNames(
      'flex',
      'max-h-[350px]',
      'flex-col',
      'sm:flex-row',
      'justify-between',
      'w-full',
      'max-w-none'
    ),
    help: 'pb-2',
    transferlist: classNames(
      'sm:w-3/5',
      'shadow-md',
      'flex',
      'flex-col',
      'min-h-[350px]',
      'max-h-[350px]',
      'border',
      'rounded',
      'overflow-hidden',
      'select-none',
      'bg-gray-50'
    ),
    transferlistHeader: classNames(
      'flex',
      'bg-gray-100',
      'justify-between',
      'items-center',
      'border-b',
      'p-3'
    ),
    transferlistHeaderItemCount: 'ml-auto text-sm',
    transferlistListItems: classNames(
      'list-none',
      'bg-gray-50',
      'h-full',
      'sm:max-w-xs',
      'overflow-x-hidden',
      'overflow-y-auto'
    ),
    transferlistListItem: classNames(
      'pl-8',
      'relative',
      'aria-selected:bg-primary-500',
      'aria-selected:data-[is-active=true]:bg-primary-500',
      'aria-selected:text-white',
      'aria-selected:data-[is-active=true]:text-white',
      'first:-mt-px',
      'first:border-t',
      'py-2',
      'px-3',
      'flex',
      'relative',
      'border-b',
      'bg-white',
      'data-[is-active=true]:text-primary-500',
      'data-[is-active=true]:bg-gray-100',
      'cursor-pointer',
      'group-data-[is-max=true]:cursor-not-allowed',
      'items-center'
    ),
    transferlistOption: 'text-sm',
    transferControls: classNames(
      'flex',
      'sm:flex-col',
      'justify-center',
      'mx-auto',
      'my-2',
      'sm:mx-2',
      'sm:my-auto',
      'border',
      'rounded'
    ),
    transferlistButton: classNames(
      'text-sm',
      'disabled:cursor-not-allowed',
      'disabled:bg-gray-200',
      'disabled:opacity-50',
      'first:rounded-l',
      'last:rounded-r',
      'sm:first:rounded-t',
      'sm:last:rounded-b',
      'appearance-none',
      'p-2',
      'm-0',
      'cursor-pointer',
      'h-10',
      'border-none',
      'rounded-none',
      'bg-gray-50',
      'hover:outline',
      'disabled:hover:outline-none',
      'hover:outline-1',
      'hover:outline-black',
      'hover:text-primary-500',
      'disabled:hover:text-current',
      'hover:z-10'
    ),
    sourceEmptyMessage:
      'appearance-none border-none w-full p-0 m-0 text-center text-gray-500 italic',
    sourceListItems: 'group-data-[is-max=true]:opacity-50',
    targetEmptyMessage:
      'appearance-none border-none w-full p-0 m-0 text-center text-gray-500 italic',
    emptyMessageInner: classNames(
      'flex',
      'items-center',
      'justify-center',
      'p-2',
      'text-sm'
    ),
    transferlistControls: 'bg-white px-3 py-2 border-b',
    transferlistSearch: classNames('flex', 'border', 'rounded', 'items-center'),
    transferlistSearchInput: classNames(
      'border-none',
      'p-1',
      'w-full',
      'bg-transparent',
      'outline-none',
      'text-sm'
    ),
    controlLabel: 'hidden',
    selectedIcon: 'w-3 absolute left-3 select-none',
    fastForwardIcon: classNames(
      'w-10',
      'flex',
      'select-none',
      '[&>svg]:m-auto',
      '[&>svg]:w-full',
      '[&>svg]:max-w-[1rem]',
      '[&>svg]:max-h-[1rem]',
      'rotate-90',
      'sm:rotate-0'
    ),
    moveRightIcon: classNames(
      'w-10',
      'flex',
      'select-none',
      '[&>svg]:m-auto',
      '[&>svg]:w-full',
      '[&>svg]:max-w-[1rem]',
      '[&>svg]:max-h-[1rem]',
      'rotate-90',
      'sm:rotate-0'
    ),
    moveLeftIcon: classNames(
      'w-10',
      'flex',
      'select-none',
      '[&>svg]:m-auto',
      '[&>svg]:w-full',
      '[&>svg]:max-w-[1rem]',
      '[&>svg]:max-h-[1rem]',
      'rotate-90',
      'sm:rotate-0'
    ),
    rewindIcon: classNames(
      'w-10',
      'flex',
      'select-none',
      '[&>svg]:m-auto',
      '[&>svg]:w-full',
      '[&>svg]:max-w-[1rem]',
      '[&>svg]:max-h-[1rem]',
      'rotate-90',
      'sm:rotate-0'
    ),
  },
}
