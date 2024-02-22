"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[2513],{60110:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>h});var t=i(58168),o=(i(96540),i(15680));const r={title:"11. Complete Example",sidebar_position:11},a=void 0,s={unversionedId:"style-guide/Portable_Dining_Philosophers_Example",id:"style-guide/Portable_Dining_Philosophers_Example",title:"11. Complete Example",description:"This chapter presents an elaborate implementation of Edsger Dijkstra's",source:"@site/docs/style-guide/Portable_Dining_Philosophers_Example.mdx",sourceDirName:"style-guide",slug:"/style-guide/Portable_Dining_Philosophers_Example",permalink:"/docs/style-guide/Portable_Dining_Philosophers_Example",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"11. Complete Example",sidebar_position:11},sidebar:"styleGuideSidebar",previous:{title:"10.8 Summary",permalink:"/docs/style-guide/s10/08"},next:{title:"References",permalink:"/docs/style-guide/References"}},l={},h=[],d={toc:h},c="wrapper";function u(n){let{components:e,...i}=n;return(0,o.yg)(c,(0,t.A)({},d,i,{components:e,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"This chapter presents an elaborate implementation of Edsger Dijkstra's\nfamous ",(0,o.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Dining_Philosophers"},"Dining\nPhilosophers"),"; a\nclassical demonstration of\n",(0,o.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/deadlock"},"deadlock")," problems in\nconcurrent programming. This example demonstrates the portability of Ada\npackages and tasking and illustrates many of the Ada 95 quality and\nstyle guidelines. Since many of the guidelines leave the program writer\nto decide what is best, there is no single best or correct example of\nhow to use Ada. Instead, you will find several styles that differ from\nyour own that may deserve consideration."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ada"},'--::::::::::\n--random_generic.ads\n--::::::::::\ngeneric\n  type Result_Subtype is (<>);\npackage Random_Generic is\n\n  -- Simple integer pseudo-random number generator package.\n  -- Michael B. Feldman, The George Washington University,\n  -- June 1995.\n\n  function Random_Value return Result_Subtype;\n\nend Random_Generic;\n--::::::::::\n--screen.ads\n--::::::::::\npackage Screen is\n\n  -- simple ANSI terminal emulator\n  -- Michael Feldman, The George Washington University\n  -- July, 1995\n\n  ScreenHeight : constant Integer := 24;\n  ScreenWidth  : constant Integer := 80;\n\n  subtype Height is Integer range 1 .. ScreenHeight;\n  subtype Width  is Integer range 1 .. ScreenWidth;\n\n  type Position is record\n    Row    : Height := 1;\n    Column : Width  := 1;\n  end record;\n\n  procedure Beep;\n  -- Pre:  none\n  -- Post: the terminal beeps once\n\n  procedure ClearScreen;\n  -- Pre:  none\n  -- Post: the terminal screen is cleared\n\n  procedure MoveCursor (To : in Position);\n  -- Pre:  To is defined\n  -- Post: the terminal cursor is moved to the given position\n\nend Screen;\n--::::::::::\n--windows.ads\n--::::::::::\nwith Screen;\npackage Windows is\n\n  -- manager for simple, nonoverlapping screen windows\n  -- Michael Feldman, The George Washington University\n  -- July, 1995\n\n  type Window is private;\n\n  function Open (UpperLeft : Screen.Position;\n                 Height    : Screen.Height;\n                 Width     : Screen.Width) return Window;\n  -- Pre:  W, Height, and Width are defined\n  -- Post: returns a Window with the given upper-left corner,\n  --   height, and width\n\n  procedure Title (W     : in out Window;\n                   Name  : in     String;\n                   Under : in     Character);\n  -- Pre:  W, Name, and Under are defined\n  -- Post: Name is displayed at the top of the window W, underlined\n  -- with the character Under.\n\n  procedure Borders (W      : in out Window;\n                     Corner : in     Character\n                     Down   : in     Character\n                     Across : in     Character);\n  -- Pre:  All parameters are defined\n  -- Post: Draw border around current writable area in window with\n  -- characters specified.  Call this BEFORE Title.\n\n  procedure MoveCursor (W : in out Window;\n                        P : in     Screen.Position);\n  -- Pre:  W and P are defined, and P lies within the area of W\n  -- Post: Cursor is moved to the specified position.\n  --   Coordinates are relative to the\n  --   upper left corner of W, which is (1, 1)\n\n  procedure Put (W  : in out Window;\n                 Ch : in     Character);\n  -- Pre:  W and Ch are defined.\n  -- Post: Ch is displayed in the window at\n  --   the next available position.\n  --   If end of column, go to the next row.\n  --   If end of window, go to the top of the window.\n\n  procedure Put (W : in out Window;\n                 S : in     String);\n  -- Pre:  W and S are defined\n  -- Post: S is displayed in the window, "line-wrapped" if necessary\n\n  procedure New_Line (W : in out Window);\n  -- Pre:  W is defined\n  -- Post: Cursor moves to beginning of next line of W;\n  --   line is not blanked until next character is written\n\nprivate\n  type Window is record\n    First   : Screen.Position; -- coordinates of upper left\n    Last    : Screen.Position; -- coordinates of lower right\n    Current : Screen.Position; -- current cursor position\n  end record;\n\nend Windows;\n--::::::::::\n--Picture.ads\n--::::::::::\nwith Windows;\nwith Screen;\npackage Picture is\n\n  -- Manager for semigraphical presentation of the philosophers\n  -- i.e. more application oriented windows, build on top of\n  -- the windows package.\n  -- Each picture has an orientation, which defines which borders\n  -- top-bottom, bottom-top, left-right, or right-left correspond\n  -- to the left and right hand of the philosopher.\n  --\n  -- Bjorn Kallberg, CelsiusTech Systems, Sweden\n  -- July, 1995\n\n  type Root is abstract tagged private;\n  type Root_Ptr is access Root\'Class;\n\n  procedure Open (W         : in out Root;\n                  UpperLeft : in     Screen.Position;\n                  Height    : in     Screen.Height;\n                  Width     : in     Screen.Width);\n  -- Pre:  Not opened\n  -- Post: An empty window exists\n\n  procedure Title (W     : in out Root;\n                   Name  : in     String);\n  -- Pre:  An empty window\n  -- Post: Name and a border is drawn.\n\n  procedure Put_Line (W : in out Root;\n                      S : in     String);\n\n  procedure Left_Fork  (W    : in out Root;\n                        Pick : in     Boolean) is abstract;\n  procedure Right_Fork (W    : in out Root;\n                        Pick : in     Boolean) is abstract;\n  -- left and right relates to philosopher position around table\n\n  type North is new Root with private;\n  type South is new Root with private;\n  type East  is new Root with private;\n  type West  is new Root with private;\n\nprivate\n  type Root is abstract tagged record\n      W : Windows.Window;\n  end record;\n\n  type North is new Root with null record;\n  type South is new Root with null record;\n  type East  is new Root with null record;\n  type West  is new Root with null record;\n\n  procedure Left_Fork  (W    : in out North;\n                        Pick : in     Boolean);\n  procedure Right_Fork (W    : in out North;\n                        Pick : in     Boolean);\n\n  procedure Left_Fork  (W    : in out South;\n                        Pick : in     Boolean);\n  procedure Right_Fork (W    : in out South;\n                        Pick : in     Boolean);\n\n  procedure Left_Fork  (W    : in out East;\n                        Pick : in     Boolean);\n  procedure Right_Fork (W    : in out East;\n                        Pick : in     Boolean);\n\n  procedure Left_Fork  (W    : in out West;\n                        Pick : in     Boolean);\n  procedure Right_Fork (W    : in out West;\n                        Pick : in     Boolean);\n\nend Picture;\n--::::::::::\n--chop.ads\n--::::::::::\npackage Chop is\n\n  -- Dining Philosophers - Ada 95 edition\n  -- Chopstick is an Ada 95 protected type\n  -- Michael B. Feldman, The George Washington University,\n  -- July, 1995.\n\n  protected type Stick is\n    entry Pick_Up;\n    procedure Put_Down;\n  private\n    In_Use: Boolean := False;\n  end Stick;\n\nend Chop;\n\n--::::::::::\n--society.ads\n--::::::::::\npackage Society is\n\n  -- Dining Philosophers - Ada 95 edition\n  -- Society gives unique ID\'s to people, and registers their names\n  -- Michael B. Feldman, The George Washington University,\n  -- July, 1995.\n\n  subtype Unique_DNA_Codes is Positive range 1 .. 5;\n\n  Name_Register : array (Unique_DNA_Codes) of String (1 .. 18) :=\n\n     ("Edsger Dijkstra   ",\n      "Bjarne Stroustrup ",\n      "Chris Anderson    ",\n      "Tucker Taft       ",\n      "Jean Ichbiah      ");\n\nend Society;\n--::::::::::\n--phil.ads\n--::::::::::\nwith Society;\npackage Phil is\n\n  -- Dining Philosophers - Ada 95 edition\n  -- Philosopher is an Ada 95 task type with discriminant\n  -- Michael B. Feldman, The George Washington University,\n  -- July 1995\n  --\n  -- Revisions:\n  -- July 1995. Bjorn Kallberg, CelsiusTech\n  --            Reporting left or right instead of first stick\n\n  task type Philosopher (My_ID : Society.Unique_DNA_Codes) is\n\n    entry Start_Eating (Chopstick1 : in Positive;\n                        Chopstick2 : in Positive);\n\n  end Philosopher;\n\n  type States is (Breathing, Thinking, Eating, Done_Eating,\n                  Got_Left_Stick, Got_Right_Stick, Got_Other_Stick, Dying);\n\nend Phil;\n--::::::::::\n--room.ads\n--::::::::::\nwith Chop;\nwith Phil;\nwith Society;\npackage Room is\n\n  -- Dining Philosophers - Ada 95 edition\n\n  -- Room.Maitre_D is responsible for assigning seats at the\n  --   table, "left" and "right" chopsticks, and for reporting\n  --   interesting events to the outside world.\n\n  -- Michael B. Feldman, The George Washington University,\n  -- July, 1995.\n\n  Table_Size : constant := 5;\n  subtype Table_Type is Positive range 1 .. Table_Size;\n\n  Sticks : array (Table_Type) of Chop.Stick;\n\n  task Maitre_D is\n    entry Start_Serving;\n    entry Report_State (Which_Phil : in Society.Unique_DNA_Codes;\n                        State      : in Phil.States;\n                        How_Long   : in Natural := 0;\n                        Which_Meal : in Natural := 0);\n  end Maitre_D;\n\nend Room;\n--::::::::::\n--random_generic.adb\n--::::::::::\nwith Ada.Numerics.Discrete_Random;\npackage body Random_Generic is\n\n  -- Body of random number generator package.\n  -- Uses Ada 95 random number generator; hides generator parameters\n  -- Michael B. Feldman, The George Washington University,\n  -- June 1995.\n\n  package Ada95_Random is new Ada.Numerics.Discrete_Random\n    (Result_Subtype => Result_Subtype);\n\n  G : Ada95_Random.Generator;\n\n  function Random_Value return Result_Subtype is\n  begin\n    return Ada95_Random.Random (Gen => G);\n  end Random_Value;\n\nbegin -- Random_Generic\n\n  Ada95_Random.Reset (Gen => G);  -- time-dependent initialization\n\nend Random_Generic;\n--::::::::::\n--screen.adb\n--::::::::::\nwith Text_IO;\npackage body Screen is\n\n  -- simple ANSI terminal emulator\n  -- Michael Feldman, The George Washington University\n  -- July, 1995\n\n  -- These procedures will work correctly only if the actual\n  -- terminal is ANSI compatible. ANSI.SYS on a DOS machine\n  -- will suffice.\n\n  package Int_IO is new Text_IO.Integer_IO (Num => Integer);\n\n  procedure Beep is\n  begin\n    Text_IO.Put (Item => ASCII.BEL);\n  end Beep;\n\n  procedure ClearScreen is\n  begin\n    Text_IO.Put (Item => ASCII.ESC);\n    Text_IO.Put (Item => "[2J");\n  end ClearScreen;\n\n  procedure MoveCursor (To : in Position) is\n  begin\n    Text_IO.New_Line;\n    Text_IO.Put (Item => ASCII.ESC);\n    Text_IO.Put ("[");\n    Int_IO.Put (Item => To.Row, Width => 1);\n    Text_IO.Put (Item => \';\');\n    Int_IO.Put (Item => To.Column, Width => 1);\n    Text_IO.Put (Item => \'f\');\n  end MoveCursor;\n\nend Screen;\n--::::::::::\n--windows.adb\n--::::::::::\nwith Text_IO, with Screen;\npackage body Windows is\n\n  -- manager for simple, nonoverlapping screen windows\n  -- Michael Feldman, The George Washington University\n  -- July, 1995\n\n  function Open (UpperLeft : Screen.Position;\n                 Height    : Screen.Height;\n                 Width     : Screen.Width) return Window is\n    Result : Window;\n  begin\n    Result.Current := UpperLeft;\n    Result.First   := UpperLeft;\n    Result.Last    := (Row    => UpperLeft.Row + Height - 1,\n                       Column => UpperLeft.Column + Width - 1);\n    return Result;\n  end Open;\n\n  procedure EraseToEndOfLine (W : in out Window) is\n  begin\n    Screen.MoveCursor (W.Current);\n    for Count in W.Current.Column .. W.Last.Column loop\n      Text_IO.Put (\' \');\n    end loop;\n    Screen.MoveCursor (W.Current);\n  end EraseToEndOfLine;\n\n  procedure Put (W  : in out Window;\n                 Ch : in     Character) is\n  begin\n\n    -- If at end of current line, move to next line\n    if W.Current.Column > W.Last.Column then\n      if W.Current.Row = W.Last.Row then\n        W.Current.Row := W.First.Row;\n      else\n        W.Current.Row := W.Current.Row + 1;\n      end if;\n      W.Current.Column := W.First.Column;\n    end if;\n\n    -- If at First char, erase line\n    if W.Current.Column = W.First.Column then\n      EraseToEndOfLine (W);\n    end if;\n\n    Screen.MoveCursor (To => W.Current);\n\n     -- here is where we actually write the character!\n     Text_IO.Put (Ch);\n     W.Current.Column := W.Current.Column + 1;\n\n  end Put;\n\n  procedure Put (W : in out Window;\n                 S : in     String) is\n  begin\n    for Count in S\'Range loop\n      Put (W, S (Count));\n    end loop;\n  end Put;\n\n  procedure New_Line (W : in out Window) is\n  begin\n    if W.Current.Column = 1 then\n      EraseToEndOfLine (W);\n    end if;\n    if W.Current.Row = W.Last.Row then\n      W.Current.Row := W.First.Row;\n    else\n      W.Current.Row := W.Current.Row + 1;\n    end if;\n    W.Current.Column := W.First.Column;\n  end New_Line;\n  procedure Title (W     : in out Window;\n                   Name  : in     String;\n                   Under : in     Character) is\n  begin\n    -- Put name on top line\n    W.Current := W.First;\n    Put (W, Name);\n    New_Line (W);\n    -- Underline name if desired, and reduce the writable area\n    -- of the window by one line\n    if Under = \' \' then   -- no underlining\n      W.First.Row := W.First.Row + 1;\n    else                  -- go across the row, underlining\n      for Count in W.First.Column .. W.Last.Column loop\n        Put (W, Under);\n      end loop;\n      New_Line (W);\n      W.First.Row := W.First.Row + 2; -- reduce writable area\n    end if;\n  end Title;\n\n  procedure Borders (W       : in out Window;\n                     Corner  : in     Character\n                     Down    : in     Character\n                     Across  : in     Character is\n,\n  begin\n    -- Put top line of border\n    Screen.MoveCursor (W.First);\n    Text_IO.Put (Corner);\n    for Count in W.First.Column + 1 .. W.Last.Column - 1 loop\n      Text_IO.Put (Across);\n    end loop;\n    Text_IO.Put (Corner);\n\n    -- Put the two side lines\n    for Count in W.First.Row + 1 .. W.Last.Row - 1 loop\n      Screen.MoveCursor ((Row => Count, Column => W.First.Column));\n      Text_IO.Put (Down);\n      Screen.MoveCursor ((Row => Count, Column => W.Last.Column));\n      Text_IO.Put (Down);\n    end loop;\n\n    -- Put the bottom line of the border\n    Screen.MoveCursor ((Row => W.Last.Row, Column => W.First.Column));\n    Text_IO.Put (Corner);\n    for Count in W.First.Column + 1 .. W.Last.Column - 1 loop\n      Text_IO.Put (Across);\n    end loop;\n    Text_IO.Put (Corner);\n\n    -- Make the Window smaller by one character on each side\n    W.First   := (Row => W.First.Row + 1, Column => W.First.Column + 1);\n    W.Last    := (Row => W.Last.Row - 1,  Column => W.Last.Column - 1);\n    W.Current := W.First;\n  end Borders;\n\n  procedure MoveCursor (W : in out Window;\n                        P : in     Screen.Position) is\n    -- Relative to writable Window boundaries, of course\n  begin\n    W.Current.Row    := W.First.Row + P.Row;\n    W.Current.Column := W.First.Column + P.Column;\n  end MoveCursor;\n\nbegin -- Windows\n\n  Text_IO.New_Line;\n  Screen.ClearScreen;\n  Text_IO.New_Line;\n\nend Windows;\n--------------------\npackage Windows.Util is\n  --\n  -- Child package to change the borders of an existing window\n  -- Bjorn Kallberg, CelsiusTech Systems, Sweden\n  -- July, 1995.\n\n  -- call these procedures after border and title\n  procedure Draw_Left   (W  : in out Window;\n                         C  : in     Character);\n  procedure Draw_Right  (W  : in out Window;\n                         C  : in     Character);\n  procedure Draw_Top    (W  : in out Window;\n                         C  : in     Character);\n  procedure Draw_Bottom (W  : in out Window;\n                         C  : in     Character);\n\nend Windows.Util;\n--------------------\nwith Text_IO;\npackage body Windows.Util is\n\n  -- Bjorn Kallberg, CelsiusTech Systems, Sweden\n  -- July, 1995.\n\n  -- When making borders and titles, the size has shrunk, so\n  -- we must now draw outside the First and Last points\n\n   procedure Draw_Left (W  : in out Window;\n                        C  : in     Character) is\n   begin\n     for R in W.First.Row - 3  .. W.Last.Row + 1 loop\n       Screen.MoveCursor ((Row => R, Column => W.First.Column-1));\n       Text_IO.Put (C);\n      end loop;\n   end;\n\n   procedure Draw_Right (W  : in out Window;\n                         C  : in     Character) is\n   begin\n     for R in W.First.Row - 3  .. W.Last.Row + 1 loop\n       Screen.MoveCursor ((Row => R, Column => W.Last.Column + 1));\n       Text_IO.Put (C);\n     end loop;\n   end;\n\n   procedure Draw_Top (W  : in out Window;\n                       C  : in     Character) is\n   begin\n     for I in W.First.Column - 1 .. W.Last.Column + 1 loop\n       Screen.MoveCursor ((Row => W.First.Row - 3, Column => I));\n       Text_IO.Put (C);\n     end loop;\n   end;\n\n   procedure Draw_Bottom (W  : in out Window;\n                          C  : in     Character) is\n   begin\n     for I in W.First.Column - 1 .. W.Last.Column + 1 loop\n       Screen.MoveCursor ((Row => W.Last.Row + 1, Column => I));\n       Text_IO.Put (C);\n     end loop;\n   end;\n\nend Windows.Util;\n\n--::::::::::\n--Picture.adb\n--::::::::::\nwith Windows.Util;\npackage body Picture is\n  --\n  -- Bjorn Kallberg, CelsiusTech Systems, Sweden\n  -- July, 1995\n\n  function Vertical_Char (Stick : Boolean) return Character is\n  begin\n     if Stick then\n        return \'#\';\n     else\n       return \':\';\n     end if;\n  end;\n\n  function Horizontal_Char (Stick : Boolean) return Character is\n  begin\n    if Stick then\n       return \'#\';\n    else\n       return \'-\';\n    end if;\n  end;\n\n  procedure Open (W         : in out Root;\n                  UpperLeft : in     Screen.Position;\n                  Height    : in     Screen.Height;\n                  Width     : in     Screen.Width) is\n  begin\n     W.W := Windows.Open (UpperLeft, Height, Width);\n  end;\n\n  procedure Title (W     : in out Root;\n                   Name  : in     String) is\n  -- Pre:  An empty window\n  -- Post: Name and a boarder is drawn.\n\n  begin\n      Windows.Borders (W.W, \'+\', \':\', \'-\');\n      Windows.Title (W.W, Name,\'-\');\n  end;\n\n  procedure Put_Line (W : in out Root;\n                      S : in     String) is\n  begin\n     Windows.Put (W.W, S);\n     Windows.New_Line (W.W);\n  end;\n\n  -- North\n  procedure Left_Fork  (W    : in out North;\n                        Pick : in     Boolean) is\n  begin\n     Windows.Util.Draw_Right (W.W, Vertical_Char (Pick));\n  end;\n\n  procedure Right_Fork  (W    : in out North;\n                         Pick : in     Boolean) is\n  begin\n     Windows.Util.Draw_Left (W.W, Vertical_Char (Pick));\n  end;\n\n  -- South\n  procedure Left_Fork  (W    : in out South;\n                        Pick : in     Boolean) is\n  begin\n     Windows.Util.Draw_Left (W.W, Vertical_Char (Pick));\n  end;\n\n  procedure Right_Fork  (W    : in out South;\n                         Pick : in     Boolean) is\n  begin\n     Windows.Util.Draw_Right (W.W, Vertical_Char (Pick));\n  end;\n\n  -- East\n  procedure Left_Fork  (W    : in out East;\n                        Pick : in     Boolean) is\n  begin\n     Windows.Util.Draw_Bottom (W.W, Horizontal_Char (Pick));\n  end;\n  procedure Right_Fork  (W    : in out East;\n                         Pick : in     Boolean) is\n  begin\n     Windows.Util.Draw_Top (W.W, Horizontal_Char (Pick));\n  end;\n\n  -- West\n  procedure Left_Fork  (W    : in out West;\n                        Pick : in     Boolean) is\n  begin\n     Windows.Util.Draw_Top (W.W, Horizontal_Char (Pick));\n  end;\n\n  procedure Right_Fork  (W    : in out West;\n                         Pick : in     Boolean) is\n  begin\n     Windows.Util.Draw_Bottom (W.W, Horizontal_Char (Pick));\n  end;\n\nend Picture;\n\n--::::::::::\n--chop.adb\n--::::::::::\npackage body Chop is\n\n  -- Dining Philosophers - Ada 95 edition\n  -- Chopstick is an Ada 95 protected type\n  -- Michael B. Feldman, The George Washington University,\n  -- July, 1995.\n\n  protected body Stick is\n\n    entry Pick_Up when not In_Use is\n    begin\n      In_Use := True;\n    end Pick_Up;\n\n    procedure Put_Down is\n    begin\n      In_Use := False;\n    end Put_Down;\n\n  end Stick;\n\nend Chop;\n--::::::::::\n--phil.adb\n--::::::::::\nwith Society;\nwith Room;\nwith Random_Generic;\npackage body Phil is\n\n  -- Dining Philosophers - Ada 95 edition\n  -- Philosopher is an Ada 95 task type with discriminant.\n\n  -- Chopsticks are assigned by a higher authority, which\n  --   can vary the assignments to show different algorithms.\n  -- Philosopher always grabs First_Grab, then Second_Grab.\n  -- Philosopher is oblivious to outside world, but needs to\n  --   communicate is life-cycle events the Maitre_D.\n  -- Chopsticks assigned to one philosopher must be\n  -- consecutive numbers, or the first and last chopstick.\n\n  -- Michael B. Feldman, The George Washington University,\n  -- July, 1995.\n  -- Revisions:\n  -- July, 1995. Bjorn Kallberg, CelsiusTech\n\n  subtype Think_Times is Positive range 1 .. 8;\n  package Think_Length is\n    new Random_Generic (Result_Subtype => Think_Times);\n\n  subtype Meal_Times is Positive range 1 .. 10;\n  package Meal_Length is\n    new Random_Generic (Result_Subtype => Meal_Times);\n\n  task body Philosopher is  -- My_ID is discriminant\n\n    subtype Life_Time is Positive range 1 .. 5;\n\n    Who_Am_I    : Society.Unique_DNA_Codes := My_ID; -- discriminant\n    First_Grab  : Positive;\n    Second_Grab : Positive;\n    Meal_Time   : Meal_Times;\n    Think_Time  : Think_Times;\n    First_Stick : States;\n\n  begin\n      -- get assigned the first and second chopsticks here\n    accept Start_Eating (Chopstick1 : in Positive;\n                         Chopstick2 : in Positive) do\n      First_Grab  := Chopstick1;\n      Second_Grab := Chopstick2;\n      if (First_Grab mod Room.Table_Type\'Last) + 1 = Second_Grab then\n         First_Stick := Got_Right_Stick;\n      else\n         First_Stick := Got_Left_Stick;\n      end if;\n    end Start_Eating;\n    Room.Maitre_D.Report_State (Who_Am_I, Breathing);\n\n    for Meal in Life_Time loop\n      Room.Sticks (First_Grab).Pick_Up;\n      Room.Maitre_D.Report_State (Who_Am_I, First_Stick, First_Grab);\n      Room.Sticks (Second_Grab).Pick_Up;\n      Room.Maitre_D.Report_State (Who_Am_I, Got_Other_Stick, Second_Grab);\n      Meal_Time := Meal_Length.Random_Value;\n      Room.Maitre_D.Report_State (Who_Am_I, Eating, Meal_Time, Meal);\n      delay Duration (Meal_Time);\n      Room.Maitre_D.Report_State (Who_Am_I, Done_Eating);\n      Room.Sticks (First_Grab).Put_Down;\n      Room.Sticks (Second_Grab).Put_Down;\n      Think_Time := Think_Length.Random_Value;\n      Room.Maitre_D.Report_State (Who_Am_I, Thinking, Think_Time);\n      delay Duration (Think_Time);\n    end loop;\n    Room.Maitre_D.Report_State (Who_Am_I, Dying);\n  end Philosopher;\nend Phil;\n--::::::::::\n--room.adb\n--::::::::::\nwith Picture;\nwith Chop;\nwith Phil;\nwith Society;\nwith Calendar;\npragma Elaborate (Phil);\npackage body Room is\n\n  -- Dining Philosophers, Ada 95 edition\n  -- A line-oriented version of the Room package\n  -- Michael B. Feldman, The George Washington University,\n  -- July, 1995.\n  -- Revisions\n  -- July, 1995. Bjorn Kallberg, CelsiusTech Systems, Sweden.\n  --             Pictorial display of stick in use\n\n  -- philosophers sign into dining room, giving Maitre_D their DNA code\n\n  Dijkstra   : aliased Phil.Philosopher (My_ID => 1);\n  Stroustrup : aliased Phil.Philosopher (My_ID => 2);\n  Anderson   : aliased Phil.Philosopher (My_ID => 3);\n  Taft       : aliased Phil.Philosopher (My_ID => 4);\n  Ichbiah    : aliased Phil.Philosopher (My_ID => 5);\n\n  type Philosopher_Ptr is access all Phil.Philosopher;\n\n  Phils      : array (Table_Type) of Philosopher_Ptr;\n  Phil_Pics  : array (Table_Type) of Picture.Root_Ptr;\n  Phil_Seats : array (Society.Unique_DNA_Codes) of Table_Type;\n\n  task body Maitre_D is\n\n    T          : Natural;\n    Start_Time : Calendar.Time;\n    Blanks     : constant String := "     ";\n\n  begin\n\n    accept Start_Serving;\n\n    Start_Time := Calendar.Clock;\n\n    -- now Maitre_D assigns phils to seats at the table\n\n    Phils :=\n      (Dijkstra\'Access,\n       Anderson\'Access,\n       Ichbiah\'Access,\n       Taft\'Access,\n       Stroustrup\'Access);\n\n    -- Which seat each phil occupies.\n    for I in Table_Type loop\n       Phil_Seats (Phils(I).My_Id) := I;\n    end loop;\n\n    Phil_Pics :=\n       (new Picture.North,\n        new Picture.East,\n        new Picture.South,\n        new Picture.South,\n        new Picture.West);\n\n    Picture.Open (Phil_Pics(1).all,( 1, 24), 7, 30);\n    Picture.Open (Phil_Pics(2).all,( 9, 46), 7, 30);\n    Picture.Open (Phil_Pics(3).all,(17, 41), 7, 30);\n    Picture.Open (Phil_Pics(4).all,(17,  7), 7, 30);\n    Picture.Open (Phil_Pics(5).all,( 9,  2), 7, 30);\n\n    -- and assigns them their chopsticks.\n\n    Phils (1).Start_Eating (1, 2);\n    Phils (3).Start_Eating (3, 4);\n    Phils (2).Start_Eating (2, 3);\n    Phils (5).Start_Eating (1, 5);\n    Phils (4).Start_Eating (4, 5);\n\n    loop\n      select\n        accept Report_State (Which_Phil : in Society.Unique_DNA_Codes;\n                             State      : in Phil.States;\n                             How_Long   : in Natural := 0;\n                             Which_Meal : in Natural := 0) do\n\n          T := Natural (Calendar."-" (Calendar.Clock, Start_Time));\n\n          case State is\n\n            when Phil.Breathing =>\n              Picture.Title (Phil_Pics (Phil_Seats (Which_Phil)).all,\n                     Society.Name_Register (Which_Phil));\n              Picture.Put_line (Phil_Pics (Phil_Seats (Which_Phil)).all,\n                     "T =" & Integer\'Image (T) & " "\n                      & "Breathing...");\n\n            when Phil.Thinking =>\n              Picture.Put_line (Phil_Pics (Phil_Seats (Which_Phil)).all,\n                     "T =" & Integer\'Image (T) & " "\n                      & "Thinking"\n                      & Integer\'Image (How_Long) & " seconds.");\n\n            when Phil.Eating =>\n              Picture.Put_line (Phil_Pics (Phil_Seats (Which_Phil)).all,\n                     "T =" & Integer\'Image (T) & " "\n                      & "Meal"\n                      & Integer\'Image (Which_Meal)\n                      & ","\n                      & Integer\'Image (How_Long) & " seconds.");\n\n            when Phil.Done_Eating =>\n              Picture.Put_line (Phil_Pics (Phil_Seats (Which_Phil)).all,\n                     "T =" & Integer\'Image (T) & " "\n                      & "Yum-yum (burp)");\n              Picture.Left_Fork (Phil_Pics (Phil_Seats (Which_Phil)).all, False);\n              Picture.Right_Fork (Phil_Pics (Phil_Seats (Which_Phil)).all, False);\n\n            when Phil.Got_Left_Stick =>\n              Picture.Put_line (Phil_Pics (Phil_Seats (Which_Phil)).all,\n                     "T =" & Integer\'Image (T) & " "\n                      & "First chopstick"\n                      & Integer\'Image (How_Long));\n              Picture.Left_Fork (Phil_Pics (Phil_Seats (Which_Phil)).all, True);\n\n            when Phil.Got_Right_Stick =>\n              Picture.Put_line (Phil_Pics (Phil_Seats (Which_Phil)).all,\n                     "T =" & Integer\'Image (T) & " "\n                      & "First chopstick"\n                      & Integer\'Image (How_Long));\n              Picture.Right_Fork (Phil_Pics (Phil_Seats (Which_Phil)).all, True);\n\n            when Phil.Got_Other_Stick =>\n              Picture.Put_line (Phil_Pics (Phil_Seats (Which_Phil)).all,\n                     "T =" & Integer\'Image (T) & " "\n                      & "Second chopstick"\n                      & Integer\'Image (How_Long));\n              Picture.Left_Fork (Phil_Pics (Phil_Seats (Which_Phil)).all, True);\n              Picture.Right_Fork (Phil_Pics (Phil_Seats (Which_Phil)).all, True);\n\n            when Phil.Dying =>\n              Picture.Put_line (Phil_Pics (Phil_Seats (Which_Phil)).all,\n                     "T =" & Integer\'Image (T) & " "\n                      & "Croak");\n\n          end case; -- State\n\n        end Report_State;\n\n      or\n        terminate;\n      end select;\n\n    end loop;\n\n  end Maitre_D;\n\nend Room;\n\n--::::::::::\n--diners.adb\n--::::::::::\nwith Text_IO;\nwith Room;\nprocedure Diners is\n\n  -- Dining Philosophers - Ada 95 edition\n\n  -- This is the main program, responsible only for telling the\n  --   Maitre_D to get busy.\n\n  -- Michael B. Feldman, The George Washington University,\n  -- July, 1995.\n\nbegin\n  --Text_IO.New_Line;     -- artifice to flush output buffer\n  Room.Maitre_D.Start_Serving;\nend Diners;\n')),(0,o.yg)("p",null,"This version of the Dining Philosophers example was provided by Dr.\nMichael B. Feldman of the George Washington University and Bjorn\nKallberg of CelciusTech Systems, Sweden. This example was compiled using\nthe GNAT Ada 95 compiler, version 2.07, on a Sun platform."),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},'This page of the "Ada Quality and Style Guide" has been adapted from the\noriginal work at ',(0,o.yg)("a",{parentName:"p",href:"https://en.wikibooks.org/wiki/Ada_Style_Guide"},"https://en.wikibooks.org/wiki/Ada_Style_Guide"),", which is\nlicensed under the\n",(0,o.yg)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by-sa/3.0/"},"Creative Commons Attribution-ShareAlike License"),";\nadditional terms may apply. Page not endorsed by Wikibooks or the Ada\nStyle Guide Wikibook authors. This page is licensed under the same license\nas the original work.")))}u.isMDXComponent=!0}}]);