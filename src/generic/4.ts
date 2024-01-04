interface PageInfo {
  title: string;
}
class Component<T> {
  constructor(public props: T) {}
}
class Page extends Component<PageInfo> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
