Playwright function locator
==========================
used to perform operation on the websites
1.click() - used to click on the element(button ,link, checkbox , radio button,menu items ,image)
Automatically waits for the elements should be visble and enable
2.fill() - used to enter any value in the textbox or in amy field or multi line <Textarea>
can be used to handle multi line text box like by `` or we can use by
next line
Automatically waits for the element should be visible and also editable
Override the existing value present in the textbox or the mukti line textbox
Note:locator.type() - removed its older version and also it cannot override the value existing
3.Clear() - used to clear the existing value in the textbox or the multi line text area
4.Check() - used to check the radio button and check box
suporrted elements:
<input type='checkbox'>
<input type='radio'>
5.Uncheck() - used to uncheck the checkbox
suporrted elements
<input type='checkbox'>
6.Inputvalue() - used to get the current value from the textbox or multiline textbox
note: Set a value - use fill()
read a value - use inputvalue()
7.getAttribute() - used to get the current attribute of the element
href
src
value
type
placeholder
id
syntax getAttribute(attributeName) it will return the respective attribute value
<tagname attributename='attributename' attribute='attributevalue' attributename='attributevalue'>
8.textcontent() - use to fetch the text of the element


