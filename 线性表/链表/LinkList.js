/**
 * 链表节点类
 */
var LinkList = function () {
    this.data = null;
    this.next = null;  
};
/**
 * 单链表类
 */
var LinkListClass = function () {
    this.head = new LinkList();
    this.head.data = 'headNode';
};
/**
 * 头插法建立单链表
 * @param {string[]} split 
 */
LinkListClass.prototype.createListF = function (split) {
    if (this.head.next !== null) {
        console.log('单链表已经存有数据，无法建立新单链表');
        throw new Error('Unexpected operation');
    }
    let s;
    for (let i = 0,len = split.length; i < len; i++) {
        s = new LinkList();
        s.data = split[i];
        s.next = this.head.next;
        this.head.next = s;
    }
};
/**
 * 尾插法建立单链表
 * @param {string[]} split 
 */
LinkListClass.prototype.createListR = function (split) {
    if (this.head.next !== null) {
        console.log('单链表已经存有数据，无法建立新单链表');
        throw new Error('Unexpected operation');
    }
    let s, r;
    r = this.head;
    for (let i = 0, len = split.length; i < len; i++) {
        s = new LinkList();
        s.data = split[i];
        r.next = s;
        r = s;
    }
    r.next = null;
};
/**
 * 将单链表的所有节点值构成一个字符串返回
 * @returns string
 */
LinkListClass.prototype.dispList = function () {
    let str = '',
        cur = this.head.next;
    if (cur) {
        while (cur !== null) {
            str += cur.data + ' ';
            cur = cur.next;
        }
    }
    return str;
};
/**
 * 求单链表数据节点个数
 * @returns num
 */
LinkListClass.prototype.listLength = function () {
    let len = 0,
        cur = this.head;
    while (cur.next !== null) {
        len++;
        cur = cur.next;
    }
    return len;
};
/**
 * 求单链表中某个数据元素值
 * @returns string
 */
LinkListClass.prototype.getElem = function (i) {
    let j = 0,
        cur = this.head;
    while (j < i && cur !== null) {
        j++;
        cur = cur.next;
    }
    if (cur) {
        return cur.data;
    }
};
/**
 * 按元素值查找元素序号
 * @param {string} e 
 * @returns num
 */
LinkListClass.prototype.locateElem = function (e) {
    let i = 1,
        p = this.head.next;
    while (p !== null && p.data !== e) {
        p = p.next;
        i++;
    }
    if (p === null) {
        return 0;
    } else {
        return i;
    }
};
/**
 * 插入数据元素
 * @param {num} i 
 * @param {string} e 
 * @returns boolean
 */
LinkListClass.prototype.listInsert = function (i, e) {
    let j = 0, s, p;
    if (i < 1) {
        return false;
    }
    p = this.head;
    while (j < i - 1 && p !== null) {
        j++;
        p = p.next;
    }
    if (p === null) {
        return false;
    } else {
        s = new LinkList();
        s.data = e;
        s.next = p.next;
        p.next = s;
        return true;
    }
};
/**
 * 删除数据元素
 * @param {num} i 
 * @returns 
 */
LinkListClass.prototype.listDelete = function (i) {
    let j = 0, q, p;
    if (i < 1) {
        return false;
    }
    p = this.head;
    while (i < j - 1 && p !== null) {
        j++;
        p = p.next;
    }
    if (p === null) {
        return false;
    } else {
        q = p.next;
        if (q === null) {
            return false;
        }
        let e = q.data;
        p.next = q.next;
        q = null;
        return e;
    }
};
/**
 * 将单链表递增排序（插入排序）
 * @returns {LinkList} this.head
 */
LinkListClass.prototype.sort = function () {
    let p, pre, q, collator = Intl.Collator();
    q = this.head.next;
    p = this.head.next.next;
    q.next = null;
    while (p !== null) {
        q = p.next;
        pre = this.head;
        while (pre.next !== null && collator.compare(pre.next.data, p.data) < 0) {
            pre = pre.next;
        }
        p.next = pre.next;
        pre.next = p;
        p = q; 
    }
    return this.head;
};