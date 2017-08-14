export function GetLastIndex() {
    var last = 0;
    this.getInitialState().users.map((todo, index) =>
        last ++
    );

    return last;
}