<h1>Data Structures & Algorithms</h1>
<p>This Repository is Made For Anyone Who Wants To Learn About : Big-O Notation, Data Structures, and Algorithms</p>

<h4>We Will Be Disussing Big-O Notation</h4>
<hr>
<ul>
  <li><a href="#big-o">What is Big-O ?</a></li>
  <li><a href="#big-o-cases">Big-O Cases From Best To Worst</a></li>
  <li><a href="#big-o-rules">Big-O Basic Rules</a></li>
</ul

<h4>We Will Be Covering 7 Different Data Structures For Now</h4>
<hr>

<ul>
  <li><a href="#array-structure">Array Structure:  (Fixed Size)</a></li>
  <li><a href="#dynamic-array-structure">Dynamic Array Structure: (Double Size)</a></li>
  <li><a href="#linked-list">Linked List Data Structure</a></li>
  <li><a href="#stack">Stack Data Structure</a></li>
  <li><a href="#queue">Queue Data Structure</a></li>
  <li><a href="#hash">Hash Table Structure</a></li>
</ul>

<h4>We Will Be Discussing Some Of The Famous Algorithms Like</h4>
<hr>
<ul>
  <li>Sorting Algorithms: 
  <ul>
    <li><a href="#quicksort">QuickSort</a></li> 
    <li><a href="#bubblesort">BubbleSort</a></li>  
    <li>MergeSort</li> 
  </ul>
  </li> 
  <li>Searching Algorithms: 
  <ul>
  <li>Linear Search</li> 
  <li>Binary Search</li>
  </ul>
  </li>
  <li>Breadth First Search (BFS) (coming soon)</li>
  <li>Depth First Search (DFS) (coming soon)</li>
</ul>

<h2 id="big-o">Big-O Notation</h2>

Big-O is the worst case scenario of the code which means the high time complexity the code gets executed in.

<h3 id="big-o-cases">Big-O Cases From Best To Worst</h3>
<ul>
  <li>O(logn) (Logarithmic)</li>
  <li>O(1)</li>
  <li>O(n) (Linear)</li>
  <li>O(n<sup>2</sup>) (Quadratic)</li>
  <li>O(2<sup>n</sup>) (Exponential)</li>
  <li>O(n!) (Worst Case)</li>
</ul>

<img src="https://github.com/omarchouman/Data-Structures/blob/main/Big-O.jpeg?raw=true">


<h3 id="big-o-rules">Big-O Rules</h3>
<ul>
  <li>+, -, /,  x, if       (1 Step)        (Constant)</li>
  <li>Loop, SubRoutine, Function     (n Step)</li>
  <li>To Access Memory  (2 Steps)</li>
</ul>


<h2 id="array-structure">Array Structure (Fixed Size)</h2>

An array is a collection of elements identified by their index.

<h3>Time Complexity of An Array:</h3>
<ul>
  <li>Access = O(1)</li>
  <li>Search,Insert, and Delete = O(n)</li>
</ul>

<img src="https://github.com/omarchouman/Data-Structures/blob/main/Array.png?raw=true">

<h2 id="dynamic-array-structure">Dynamic Array Structure (Double Size)</h2>

A dynamic array doubles the size of your normal array to allow you to add new items to it.

<h2 id="linked-list">Linked List Data Structure</h2>

Linked List is basically when you have a bunch of connected nodes where each node takes a value and then takes the address of the next node.

<h4>Double Linked List:</h4>
<p>Previous Address</p>      <p>Value</p>      <p>Next Address</p>

<img src="https://github.com/omarchouman/Data-Structures/blob/main/Single%20Linked%20List.png">

<img src="https://github.com/omarchouman/Data-Structures/blob/main/Double%20Linked%20List.png">


<h2 id="stack">Stack Data Structure</h2>

Stack is a linear data structure that follows FILO (First In Last Out) mechanism.

3 basic operations are performed in a stack:
<ul>
  <li>Push: Adds an item to the stack      (top + 1)</li>
  <li>Pop: removes an item from the stack   (top – 1)</li>
  <li>Peek or Top: returns top element stack</li>
</ul>

<img src="https://github.com/omarchouman/Data-Structures/blob/main/Stack.png">


<h2 id="queue">Queue Data Structure</h2>

Queue is a listing data structure that follows FIFO ( First In First Out).

2 basic operations are performed in queue:
<ul>
  <li>Rear : First Element in a Queue</li>
  <li>Front : Next or Last Element in a Queue</li>
</ul>

Queue starts from Rear and ends at Front

<img src="https://github.com/omarchouman/Data-Structures/blob/main/Queue.png">


<h2 id="hash">Hash Table Data Structure</h2>

In a hash table, data is stored in an array format, where each data value has its own unique index value. <br>

Key Value Pairs

<h4>Hash Table Easiest Algorithm:  item % size</h4>

<img src="https://github.com/omarchouman/Data-Structures/blob/main/Hash%20Table.png">


<h2>Algorithms</h2>
<hr/>

<br/>

<h3 id="quicksort">QuickSort</h3>
<hr/>

<p>
Quicksort is a divide and conquer algorithms, it follows the partitioning procedure.<br/>
Imagine some students standing in a line, these students should be arranged (Sorted) by their height.<br/>
So what options do we have here?<br/>

<br/>
<img src="https://github.com/omarchouman/Data-Structures-and-Algorithms/blob/main/students-in-line.jpg"/>
  
We Got 2 Options: <br/>

1. Teacher can go and find each student's place 1 by 1.
2. Students can arrange themselves. 

Now, which option is better?<br/>

Clearly, it's option 2 right? Why? <br/>

Students arranging themselves would take less time than teacher going for their places 1 by 1. That way, students can arrange themselves by asking the left and right hand sides if the student is taller or shorter. <br/>
<p>



<p>
Choosing The Pivot: <br/>
Pivot means the base element that you will take into consideration that will help you perform better.<br/>
You might have heard about the word pivot before. <br/>

Pivot can be chosen as the first or the last element. But i wouldn't recommend it. <br/>

The reason is that you will run into worst case if you are dealing with nearly sorted or reversed lists.<br/>

What i recommend instead is choosing the middle element as pivot.
</p>

<br/><br/>

<h3 id="bubblesort">Bubble Sort<h3>
<hr/>

<p>Bubble sort algorithm uses the concept of swapping. Whenever we see elements that are out of order we just swap them. And if we do that process multiple times we will eventually get our array to be sorted.</p>

<img src="https://github.com/omarchouman/Data-Structures-and-Algorithms/blob/main/Bubble-sort.gif"/>

<br/><br/>

<h3 id="mergesort">Merge Sort</h3>
<hr/>

<p>With Merge Sort what you are really doing is that you are dividing a large array into 2 halfs. You sort the left half then you sort the right half then you merge them together in a sorted way.</p>

<img src="https://github.com/omarchouman/Data-Structures-and-Algorithms/blob/main/Merge-sort-example-300px.gif"/>

<br/><br/>